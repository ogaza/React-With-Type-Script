export type ApplicationState = { value: number};
export type Action = { type: string; [key: string]: any };

export type Reducer = (state: ApplicationState, action: Action) => ApplicationState;