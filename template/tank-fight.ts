import { GameTemplate } from "./game-template";

export class TankFight extends GameTemplate {
    constructor() {
        super();
        this._gameName = "TankFight"
    }
    protected initialize(): string {
        return `Initialize: ${this._gameName}`;
    }
    protected startPlay(): string {
        return `StartPlay: ${this._gameName}`;

    }
    protected endPlay(): string {
        return `EndPlay: ${this._gameName}`;

    }

}