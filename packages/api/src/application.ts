import { BaseHttpError, DbService } from '@middleware';
import { UserController, UserRepository, UserService } from '@user';
import express, { NextFunction, Request, Response } from 'express';
import IApplication from 'interfaces/IApplication';
import { InversifyExpressServer } from 'inversify-express-utils';
import morgan from 'morgan';
import { STATUS_CODE } from 'utils/constants';
export default class Application extends IApplication {
  //* * */
  async setup() {
    const server = new InversifyExpressServer(this._container);
    server.setErrorConfig((app) => {
      app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        console.error(err);
        if (err instanceof BaseHttpError) {
          res.status(err.statusCode).send(err.message);
        } else {
          res.status(STATUS_CODE.INTERNAL_SERVER).send('internal Server Error');
        }
        // next();
      });
    });

    server.setConfig((app) => {
      app.use(express.json());
      app.use(morgan('dev'));
    });
    const app = server.build();
    const port = process.env.PORT || 5000;
    const runningServer = app.listen(port, () => {
      console.log(`🚀 server is running on http://localhost:${port}`);
    });
    process.on('SIGTERM', async () => {
      console.debug('SIGTERM signal received: closing HTTP server');
      const db: DbService = this._container.get<DbService>(DbService);
      await db.disconnect();
      console.debug('disconnecting from database');
      runningServer.close(async () => {
        console.debug('HTTP server closed');
      });
    });
  }

  configureService(): void {
    // db stuff
    this._container.bind(DbService).toSelf();
    // users
    this._container.bind(UserRepository).toSelf();
    this._container.bind(UserService).toSelf();
    this._container.bind(UserController).toSelf();
  }
}
