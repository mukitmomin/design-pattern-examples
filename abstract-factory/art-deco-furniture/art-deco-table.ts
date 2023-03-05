import { AbstractTable } from "../interfaces/abstract-table";

export class ArtDecoTable implements AbstractTable {
    sitOn(): string {
        return "Sitting on: ART DECO TABLE"
    }
    putFoodOn(): string {
        return "Food served on: ART DECO TABLE"
    }

}