import { Transport } from "./transport-interface";

export class Ship implements Transport {
    public deliver(): string {
        return "Delivering on the sea by: SHIP"
    }
}