import { Transport } from "./transport-interface";

export class Truck implements Transport {
    deliver(): string {
        return "Delivering on the road by: TRUCK"
    }

}