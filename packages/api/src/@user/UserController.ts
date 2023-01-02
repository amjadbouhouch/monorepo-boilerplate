import { Response } from 'express';
import { controller, httpGet, requestParam, response } from 'inversify-express-utils';
import { UserService } from './UserService';
@controller('/users')
export class UserController {
  constructor(private _userService: UserService) {}

  @httpGet('/')
  async list(@response() res: Response) {
    const users = await this._userService.list();
    res.send(users);
  }

  @httpGet('/:id')
  async retrieve(@requestParam('id') id: string, @response() res: Response) {
    const user = await this._userService.retrieve(id);
    res.send(user);
  }
}
