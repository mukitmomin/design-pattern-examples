import { DataSource } from "../components/data-source-interface";

/**
 * This decorator holds an aggregation of DataSource objects
 */
export class DataSourceBaseDecorator implements DataSource {
    /**
     * This protected instance of a DataSource will be set 
     * only when a concrete decorator is instantiated.
     */
    protected wrappedComponent: DataSource;

    constructor(component: DataSource) {
        console.log('Base decorator constructor called')
        this.wrappedComponent = component
    }

    /**
     * This base decorator class is responsible for simply calling 
     * the wrapped component's methods. As both this base decorator and the
     * concrete component both implement the same interface, it should work
     * @param data  
     */
    writeData(data: string): void {
        console.log("Base decorator: writeData() call")
        this.wrappedComponent.writeData(data)
    }
    readData(): string {
        console.log("Base decorator: readData() call")
        return this.wrappedComponent.readData()
    }
}