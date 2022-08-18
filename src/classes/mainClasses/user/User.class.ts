import {Subscription,StreamingService} from "../index";

export class User {
    subscriptions:Array<Subscription> = [];

    subscribe(streamingService: StreamingService): Subscription {
        const subscription = new Subscription(streamingService);
        if(!this.subscriptions.includes(subscription)){
            this.subscriptions.push(subscription)
        }
        return subscription
    }
}