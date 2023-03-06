import { Ship } from "../products/ship";
import { Transport } from "../products/transport-interface";
import { Logistics } from "./logistics";

export class SeaLogistics extends Logistics {
    createTransport(): Transport {
        return new Ship()
    }

}