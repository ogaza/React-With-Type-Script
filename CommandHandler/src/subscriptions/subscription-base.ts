import { BehaviorSubject } from "rxjs";

export class SubscriptionBase<T> {
  public subject: BehaviorSubject<T>;
  constructor() {
    this.subject = new BehaviorSubject<T>(null as unknown as T);
  }
  public clear() {
    this.subject.next(null as unknown as T);
  }
}
