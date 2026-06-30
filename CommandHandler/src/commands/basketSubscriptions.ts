import { PosStatusDto } from "../dtos";
import { SubscriptionBase } from "../subscriptions";

export class BasketsSubscription {
  public posStatus = new SubscriptionBase<PosStatusDto>();
}