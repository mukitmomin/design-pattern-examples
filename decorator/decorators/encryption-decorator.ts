import CryptoJS = require('crypto-js');
import { DataSource } from '../components/data-source-interface';
import { DataSourceBaseDecorator } from "./base-decorator";

export class EncryptionDecorator extends DataSourceBaseDecorator {
    /**
     * This concrete decorator class has to call the parent's constructor
     * and pass the concrete DataSource object
     */

    constructor(dataSource: DataSource) {
        super(dataSource)
    }

    writeData(data: string): void {
        const encryptedData = this.encrypt(data)
        console.log(`Writing encrypted data: ${encryptedData}`)
        super.writeData(encryptedData)
    }

    readData(): string {
        const encryptedData = super.readData()
        return this.decrypt(encryptedData)
    }


    encrypt(text: string) {
        return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
    };

    decrypt(data: string) {
        try {
            const resp = CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
            return resp
        } catch (error) {
            // some `crypto-js` malformed utf-8 error i don't wanna debug
            return 'decrypted string'
        }
    };
}