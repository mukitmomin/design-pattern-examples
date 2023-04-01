import { Navigator } from "./context/navigator"
import { RoadNavigation } from "./strategies/road-navigation";
import { WalkingStrategy } from "./strategies/walking-strategy";


const client = () => {
    const navigator = new Navigator();
    const start = "A";
    const end = "B";

    console.log("Driving directions")
    const drivingRoute = new RoadNavigation(start, end)
    navigator.setRoute(drivingRoute);
    console.log(navigator.buildRoute())


    console.log("Driving directions")
    const walkingRoute = new WalkingStrategy(start, end)
    navigator.setRoute(walkingRoute);
    console.log(navigator.buildRoute())

}

client()

