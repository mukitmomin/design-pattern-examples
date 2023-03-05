import { AbstractChair } from './abstract-chair';
import { AbstractTable } from './abstract-table';

/**
 * This Abstract Furniture Factory defines the types of products 
 * a concreate implementation of a Furniture factory has to produce.
 */
export interface AbstractFurnitureFactory {
    createChair(): AbstractChair;
    createTable(): AbstractTable;
}