import { DataSource } from "./data-source-interface";

export class FileDataSource implements DataSource {
    private _data: string;

    writeData(data: string): void {
        this._data = data;
        console.log("Data written successfully")
    }
    readData(): string {
        return this._data;
    }

}