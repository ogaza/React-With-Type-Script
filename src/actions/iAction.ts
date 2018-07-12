
export interface IPayload {}

export interface IAction<IPayload> {
    type: string,
    payload: IPayload
}