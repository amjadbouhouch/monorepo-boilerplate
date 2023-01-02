import { ClassTransformOptions, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from '@middleware/errors';

export class ValidatorMiddleware {
  constructor(private readonly _class: any, private readonly options?: ClassTransformOptions) {
    this.execute = this.execute.bind(this);
  }

  private async execute(req: Request, res: Response, next: NextFunction) {
    const transformedBody = plainToInstance(this._class, req.body, {
      excludeExtraneousValues: true, // not extra attributes
      // ...this.options,
    });

    const errors = await validate(transformedBody);

    if (errors.length > 0) {
      throw new BadRequestError('Data not valid');
    }

    req.body = transformedBody;

    next();
  }

  static validate(_class: any) {
    return new ValidatorMiddleware(_class).execute;
  }
}
