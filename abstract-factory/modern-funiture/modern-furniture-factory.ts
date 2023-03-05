import { AbstractChair } from "../interfaces/abstract-chair";
import { AbstractFurnitureFactory } from "../interfaces/abstract-factory";
import { AbstractTable } from "../interfaces/abstract-table";
import { ModernChair } from "./modern-chair";

export class ModernFurnitureFactory implements AbstractFurnitureFactory {
    createChair(): AbstractChair {
        return new ModernChair();
    }
    createTable(): AbstractTable {
        throw new Error("Method not implemented.");
    }

}