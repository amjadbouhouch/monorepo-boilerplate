import { STATUS_CODE } from 'utils/constants';
import { BaseHttpError } from './BaseHttpError';

export class InternalServerError extends BaseHttpError {
  constructor(message = 'INTERNAL_SERVER_ERROR', statusCode = STATUS_CODE.INTERNAL_SERVER) {
    super(message, statusCode);
  }
}
