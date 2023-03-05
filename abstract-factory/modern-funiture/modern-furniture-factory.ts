import { AbstractChair } from "../interfaces/abstract-chair";
import { AbstractFurnitureFactory } from "../interfaces/abstract-factory";
import { AbstractTable } from "../interfaces/abstract-table";
import { ModernChair } from "./modern-chair";
import { ModernTable } from "./modern-table";

export class ModernFurnitureFactory implements AbstractFurnitureFactory {
    createChair(): AbstractChair {
        return new ModernChair();
    }
    createTable(): AbstractTable {
        return new ModernTable();
    }

}