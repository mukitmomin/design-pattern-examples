/**
 * The transport interface is the product interface.
 * All implementations will have the deliver() method implemented
 */
export interface Transport {
    deliver(): string;
}