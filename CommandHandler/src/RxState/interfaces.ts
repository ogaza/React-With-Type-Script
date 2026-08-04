import { TasksSubscription } from "../subscriptions";
import { TasksCommands } from "../commands/taskCommands";

export interface IRxState {
  loadStore(): void;
  // _commonapi: {
  // subscriptions: _CommonApiSubscription;
  // };

  tasks: RxManagerState<TasksCommands, TasksSubscription>;
}

export interface RxManagerState<TCommands, TSubscription> {
  // export interface RxManagerState<TCommands extends ICommandBase, TSubscription> {
  commands: TCommands;
  subscriptions: TSubscription;
}
