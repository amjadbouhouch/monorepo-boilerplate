import { STATUS_CODE } from 'utils/constants';
import { BaseHttpError } from './BaseHttpError';

export class BadRequestError extends BaseHttpError {
  constructor(message = 'BAD_REQUEST', statusCode = STATUS_CODE.BAD_REQUEST) {
    super(message, statusCode);
  }
}
