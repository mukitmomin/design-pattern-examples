import { Logistics } from "./creators/logistics";
import { RoadLogistics } from "./creators/road-logistics";
import { SeaLogistics } from "./creators/sea-logistics";

/**
 * This is the client code function. It takes an object that 
 * implements the Logistics (ie Creator) interface.
 */
function client(logisticsApp: Logistics) {
    /**
     * The client is calling the planRoute() method of 
     * a concreate implementation of the Logistics creator.
     * So if a RoadLogistics is passed to client, it will call the 
     * createTransport() method for it, which will instantiates and returns
     * a Truck. The Truck implements the transport interface (so it must have 
     * a deliver method implemented), so the planRoute() 
     * method, that is defined in the Logistics abstract class, is able to call 
     * the deliver() method for a Truck.
     */
    const response = logisticsApp.planRoute();

    console.log(response)

}


/**
 * This is the App essentially
 */
console.log('App launched with RoadLogistics factory')
const roadLogisticsFactory = new RoadLogistics()
client(roadLogisticsFactory)

console.log('--------------------------------------')

console.log('App launched with SeaLogistics factory')
const seaLogisticsFactory = new SeaLogistics()
client(seaLogisticsFactory)