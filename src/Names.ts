import { LoadNamesStrategy } from "./Interfaces"

export class Names {

    public loadNamesStrategy: LoadNamesStrategy

    constructor(lns: LoadNamesStrategy) {
        this.loadNamesStrategy = lns
    }

}
