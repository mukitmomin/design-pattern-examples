import { AbstractTable } from "../interfaces/abstract-table";

export class ModernTable implements AbstractTable {
    sitOn(): string {
        return "Sitting on: MODERN TABLE"
    }
    putFoodOn(): string {
        return "Food served on: MODERN TABLE"
    }

}