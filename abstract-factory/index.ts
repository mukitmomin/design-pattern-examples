import { ArtDecoFurnitureFactory } from "./art-deco-furniture/art-deco-furniture-factory";
import { AbstractFurnitureFactory } from "./interfaces/abstract-factory";
import { ModernFurnitureFactory } from "./modern-funiture/modern-furniture-factory";

/**
 * The client requires any generic furniture factory. It then creates 
 * the requried product that the factory produces. Finally the client 
 * is able to call the required functions for each product.
 * @param factory {AbstractFurnitureFactory}
 */
function client(factory: AbstractFurnitureFactory) {
    // note: the type for chair is `AbstractChair`
    // this is because the client isn't aware, nor does it care
    // about the concrete type of chair. this is why a concrete chair 
    // object MUST implement the AbstractChair interface.
    const chair = factory.createChair();
    const table = factory.createTable();

    // All this works because abstract objects can't be instantiated 
    // directly. Only objects that implements an abstract interface (concrete)
    // can be instantiated. Hence the following method calls are guaranteed to 
    // work without the client needing to be aware of the create type for chair or table
    console.log(chair.sitOn());
    console.log(table.sitOn());
    console.log(table.putFoodOn());
}


/**
 * the client just wants any object, that implements the abstract 
 * factory interface. As this concrete object must implement the 
 * required methods, it has the creation methods
 */
console.log("------Modern Factory Client--------");
const modernFactory = new ModernFurnitureFactory();
client(modernFactory);


console.log("------Art Deco Client--------");
const artDecoFactory = new ArtDecoFurnitureFactory();
client(artDecoFactory)
