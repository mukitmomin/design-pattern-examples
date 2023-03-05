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
    const chair = factory.createChair();
    const table = factory.createTable();

    console.log(chair.sitOn());
    console.log(table.sitOn());
    console.log(table.putFoodOn());
}


const modernFactory = new ModernFurnitureFactory();
client(modernFactory);


const artDecoFactory = new ArtDecoFurnitureFactory();
client(artDecoFactory)
