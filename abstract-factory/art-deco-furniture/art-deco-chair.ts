import { AbstractChair } from "../interfaces/abstract-chair";

export class ArtDecoChair implements AbstractChair {
    sitOn(): string {
        return "Sitting on: ART DECO CHAIR";
    }

}