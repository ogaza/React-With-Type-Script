export type Task = { title: string }
export type TasksState = { tasks : Task[]};
export type Action = { type: string; [key: string]: any };

export type Reducer = (state: TasksState, action: Action) => TasksState;

