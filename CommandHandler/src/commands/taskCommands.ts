import { v4 as uuidv4 } from "uuid";
import { TasksCommandNames } from "./names";
import { AppStatusDto } from "../dtos";
import { SubscriptionBase } from "../subscriptions";

export class TasksCommands {
  public async postTasksByIdBarcodes(
    id: string,
    payload: any,
    // payload: PostTasksByIdBarcodesQueryDto,
    commandId?: string
  ) {
    // const commandProps: PostTasksByIdBarcodesCommandProps = {
    const commandProps = {
      id,
      payload,
    };

    if (window.invokeCommand) {
      const data = {
        // const data: PayloadBase<ICommandPayload> = {
        commandId: commandId ?? uuidv4(),
        command: TasksCommandNames.PostTasksByIdBarcodes,
        payload: commandProps,
      };
      window.invokeCommand(JSON.stringify(data));
    } else {
      console.log("invokeCommand not attached to the window object");
    }
  }
}
