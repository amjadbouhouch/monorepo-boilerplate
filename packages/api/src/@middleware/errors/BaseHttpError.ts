import { STATUS_CODE } from 'utils/constants';

export class BaseHttpError extends Error {
  constructor(public readonly message: string, public readonly statusCode: STATUS_CODE) {
    super(message);
  }
}
