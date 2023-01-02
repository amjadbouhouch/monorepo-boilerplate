import { IService } from './../interfaces/IService';
import { injectable } from 'inversify';
import { UserRepository } from './UserRepository';
import { User } from '@bh/prisma-client';

@injectable()
export class UserService implements IService<User> {
  constructor(private readonly _userRepository: UserRepository) {}

  retrieve(id: string): Promise<User> {
    return this._userRepository.retrieve(id);
  }
  update(payload: Partial<User>): Promise<void | User> {
    return this._userRepository.update(payload);
  }
  delete(id: string): Promise<void> {
    return this._userRepository.delete(id);
  }
  list() {
    return this._userRepository.list();
  }
}
