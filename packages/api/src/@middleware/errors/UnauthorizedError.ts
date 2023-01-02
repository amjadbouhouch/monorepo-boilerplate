import { STATUS_CODE } from 'utils/constants';
import { BaseHttpError } from './BaseHttpError';

export class UnauthorizedError extends BaseHttpError {
  constructor(msg = 'UNAUTHORIZED', statusCode = STATUS_CODE.NOT_FOUND) {
    super(msg, statusCode);
  }
}
