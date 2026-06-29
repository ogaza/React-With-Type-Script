import { BasketsCommands, BasketsSubscription } from "../commands/basketCommands";

export interface IRxState {
  loadStore(): void;
  _commonapi: {
    // subscriptions: _CommonApiSubscription;
  };

  baskets: RxManagerState<BasketsCommands, BasketsSubscription>;
}

export interface RxManagerState<TCommands, TSubscription> {
  // export interface RxManagerState<TCommands extends ICommandBase, TSubscription> {
  commands: TCommands;
  subscriptions: TSubscription;
}
