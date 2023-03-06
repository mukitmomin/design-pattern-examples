import { Transport } from "../products/transport-interface";

/**
 * This abstract class defines a logistics manager
 * This class can't be instantiated directly, so only concreate 
 * subclasses that inherit from this class can be instantiated. 
 * These subclasses will also have to implement the createTransport()
 * which will return a concrete product (which implements the Transport interface)
 */
export abstract class Logistics {
    private _transport: Transport;

    abstract createTransport(): Transport;

    public planRoute(): string {
        this._transport = this.createTransport();
        return `This route will be completed by: ${this._transport.deliver()}`
    }

}