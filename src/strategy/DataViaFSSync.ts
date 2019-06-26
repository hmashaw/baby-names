const fs = require('fs')
const path = require('path')

import { LoadNamesStrategy } from '../Interfaces'

export class DataViaFSSync implements LoadNamesStrategy {

    public names: string[]

    constructor() { this.onLoad() }

    private async onLoad() {

        const filePath = path.join(__dirname, '../data/demo-names.json')

        try {
            const data: string = fs.readFileSync(filePath, 'utf8')

            const jsonData: string[] = JSON.parse(data)
            this.names = jsonData
        } catch (err) {
            console.error(err)
        }

    }

}
