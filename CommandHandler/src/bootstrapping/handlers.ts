import { HandlerBase } from "./handler-base";
import { ObservableNames } from "./observableNames";

export class ObservablesHandler extends HandlerBase<ObservableNames> {
  public constructor() {
    super();
  }
}

export const observablesHandler: ObservablesHandler = new ObservablesHandler();
