import { AbstractChair } from "../interfaces/abstract-chair";
import { AbstractFurnitureFactory } from "../interfaces/abstract-factory";
import { AbstractTable } from "../interfaces/abstract-table";
import { ArtDecoChair } from "./art-deco-chair";
import { ArtDecoTable } from "./art-deco-table";

export class ArtDecoFurnitureFactory implements AbstractFurnitureFactory {
    createChair(): AbstractChair {
        return new ArtDecoChair();
    }
    createTable(): AbstractTable {
        return new ArtDecoTable();
    }

}