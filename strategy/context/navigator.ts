import { RouteStrategy } from "../strategies/route-strategy";

export class Navigator {
    private routeStrategyContext: RouteStrategy;

    /**
     * The strategy pattern works at the object level, so the 
     * choice of route happens at runtime, as shown in the client()
     * function. Unlike the template pattern where the choice happens at 
     * the class level, leading to a static implementation and would require
     * once to extend the template class.
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