export interface RouteStrategy {
    buildRoute(): string;
    getType(): string;
}