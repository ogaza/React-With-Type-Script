export class HandlerBase<T, TParam = unknown, TReturnType = void> {
  constructor() {}
  public handlers: { [key: string]: (payload: TParam) => TReturnType } = {};
  public on(name: T, handler: (payload: TParam) => TReturnType) {
    if (this.handlers[name as unknown as string]) {
      console.warn(`Handler for ${name} already exists. Overwriting it.`);
    }
    this.handlers[name as unknown as string] = handler;
  }
  public off(name: T) {
    if (!this.handlers[name as unknown as string]) {
      console.info(`Handler for ${name} does not exist.`);
    } else {
      delete this.handlers[name as unknown as string];
    }
  }
}
