import { v4 as uuidv4 } from "uuid";
import { BasketsCommandNames } from "./names";

export class BasketsCommands {
  public async postBasketsByIdBarcodes(
    id: string,
    payload: any,
    // payload: PostBasketsByIdBarcodesQueryDto,
    commandId?: string
  ) {
    // const commandProps: PostBasketsByIdBarcodesCommandProps = {
    const commandProps = {
      id,
      payload,
    };

    if (window.invokeCommand) {
      const data = {
        // const data: PayloadBase<ICommandPayload> = {
        commandId: commandId ?? uuidv4(),
        command: BasketsCommandNames.PostBasketsByIdBarcodes,
        payload: commandProps,
      };
      window.invokeCommand(JSON.stringify(data));
    } else {
      console.log("invokeCommand not attached to the window object");
    }
  }
}

export class BasketsSubscription {}
