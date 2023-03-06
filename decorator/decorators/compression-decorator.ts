import { DataSource } from "../components/data-source-interface";
import { DataSourceBaseDecorator } from "./base-decorator";

export class FileCompressionDecorator extends DataSourceBaseDecorator {
    constructor(dataSource: DataSource) {
        super(dataSource)
    }

    writeData(data: string): void {
        console.log(`original data: ${data}`)
        const poorlyCompressedData = this.compress(data)
        console.log(`compressed data: ${poorlyCompressedData}`)
        super.writeData(poorlyCompressedData)
    }

    readData(): string {
        return this.uncompress(super.readData())
    }

    compress(data: string): string {
        return data.split('').filter((_, idx) => idx % 2 === 0).join('')
    }

    uncompress(data: string): string {
        console.log(`umcompress(): ${data}`)
        return "Uncompressed string"
    }


}