import { AppStatusDto } from "../dtos";
import { SubscriptionBase } from ".";

export class TasksSubscription {
  public appStatus = new SubscriptionBase<AppStatusDto>();
}