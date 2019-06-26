// WORK IN PROGRESS

const fs = require('fs')
const path = require('path')

import { promisify } from 'util'
import { LoadNamesStrategy } from '../Interfaces'

export class DataViaFSAsync implements LoadNamesStrategy {

    public names: string[]

    constructor() { this.onLoad() }

    private async onLoad() {

        const readFileAsync = promisify(fs.readFile)
        const filePath = path.join(__dirname, '../data/demo-names.json') 

        try {
            console.log('before readfile')
            const data: string = await readFileAsync(filePath, { encoding: 'utf8' })
            console.log('after readfile')
            console.log(`DATA: ${data}`)
            let dataArray: string[] = await JSON.parse(data)
            this.names = await dataArray
            console.log(`TYPEOF: ${typeof dataArray}`)
            console.log(dataArray)

        } catch(err) {
            console.error(`ERROR:\n${err}`)
        }

    }

}
