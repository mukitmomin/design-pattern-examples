import { AbstractChair } from "../interfaces/abstract-chair";

export class ModernChair implements AbstractChair {
    public sitOn(): string {
        return "Sitting on: MODERN CHAIR"
    }
}