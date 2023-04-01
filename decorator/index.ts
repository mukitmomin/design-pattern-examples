import { DataSource } from './components/data-source-interface'
import { FileDataSource } from './components/file-data-source';
import { FileCompressionDecorator } from './decorators/compression-decorator';
import { EncryptionDecorator } from './decorators/encryption-decorator';

class ClientApp {
    protected _dataSource: DataSource;

    constructor(dataSource: DataSource) {
        this._dataSource = dataSource
    }

    write(data: string) {
        this._dataSource.writeData(data)
    }

    read(): string {
        return this._dataSource.readData()
    }
}

const dataForClient = "This is some data to be written by the client"
//execution with a concrete component
const basicDataSource = new FileDataSource()
const basicClient = new ClientApp(basicDataSource)

basicClient.write(dataForClient)
console.log(`Client Response: ${basicClient.read()}`)

console.log("--------------------------------------")

// create a compression decorator, with the basic 
const compressionDataSource = new FileCompressionDecorator(basicDataSource)
const clientWithDataCompression = new ClientApp(compressionDataSource)
clientWithDataCompression.write(dataForClient)
console.log(`Client Response: ${clientWithDataCompression.read()}`)

console.log("--------------------------------------")

// use an encryption decorator now
const encryptionDataSource = new EncryptionDecorator(basicDataSource)
const clientWithEncryption = new ClientApp(encryptionDataSource)
clientWithEncryption.write(dataForClient)
console.log(`Client Response: ${clientWithEncryption.read()}`)
console.log("--------------------------------------")
// you can create a decorator with a decorator as well
// here, we can create a decorator that encrypts and compresses the data
const encryptAndCompressDataSource = new EncryptionDecorator(compressionDataSource)
const clientWithEncAndCompression = new ClientApp(encryptAndCompressDataSource)
clientWithDataCompression.write(dataForClient)
console.log(`Client Response: ${clientWithEncAndCompression.read()}`)
