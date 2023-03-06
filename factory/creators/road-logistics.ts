import { Transport } from "../products/transport-interface";
import { Truck } from "../products/truck";
import { Logistics } from "./logistics";

/**
 * Note: this class is extending Logistics. In TS you can
 * extend abstract classes, and only implement any required 
 * abstract methods.
 */
export class RoadLogistics extends Logistics {

    /**
     * @returns concrete Truck object
     */
    createTransport(): Transport {
        return new Truck()
    }

}