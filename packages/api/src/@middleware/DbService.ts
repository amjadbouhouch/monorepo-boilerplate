import { injectable } from 'inversify';
import { dbClient } from '@bh/prisma-client';

@injectable()
export class DbService {
  constructor() {}
  async disconnect() {
    return dbClient.$disconnect();
  }
  get user() {
    return dbClient.user;
  }
}
