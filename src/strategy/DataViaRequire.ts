import { LoadNamesStrategy } from '../Interfaces'

import nameArray = require('../data/demo-names.json')

export class DataViaRequire implements LoadNamesStrategy {

    public names: string[]

    constructor() {
        this.names = nameArray
    }

}
