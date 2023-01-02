import { STATUS_CODE } from 'utils/constants';
import { BaseHttpError } from './BaseHttpError';

export class NotFoundError extends BaseHttpError {
  constructor(message = 'NOT FOUND', statusCode = STATUS_CODE.UNAUTHORIZED) {
    super(message, statusCode);
  }
}
