import { RouteStrategy } from "./route-strategy";

export class RoadNavigation implements RouteStrategy {
    private _strategyType: string;
    private _startPoint: string;
    private _endPoint: string;
    constructor(startPoint: string, endPoint: string) {
        this._startPoint = startPoint;
        this._endPoint = endPoint;

        this._strategyType = "RoadStrategy"
    }
    buildRoute(): string {
        return `Navigating using: ${this.getType()}, From: ${this._startPoint} to ${this._endPoint}`
    }

    getType(): string {
        return this._strategyType;
    }
}