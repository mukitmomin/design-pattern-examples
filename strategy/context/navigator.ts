import { RouteStrategy } from "../strategies/route-strategy";

export class Navigator {
    private routeStrategyContext: RouteStrategy;

    /**
     * 
     * @param route The concrete starategy to test
     */
    setRoute(route: RouteStrategy) {
        console.log(`setting new strategy: ${route.getType()}`)
        this.routeStrategyContext = route
    }

    buildRoute(): string {
        return this.routeStrategyContext.buildRoute();
    }


}