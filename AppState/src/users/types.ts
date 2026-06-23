export type User = { name: string }
export type UsersState = { users : User[]};
export type Action = { type: string; [key: string]: any };

export type Reducer = (state: UsersState, action: Action) => UsersState;

