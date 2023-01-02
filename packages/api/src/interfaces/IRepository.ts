export interface IRepository<T> {
  list(): Promise<T[]>;
  retrieve(id: string): Promise<T>;
  update(payload: Partial<T>): Promise<void | T>;
  delete(id: string): Promise<void>;
}
