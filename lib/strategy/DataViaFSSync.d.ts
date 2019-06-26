import { LoadNamesStrategy } from '../Interfaces';
export declare class DataViaFSSync implements LoadNamesStrategy {
    names: string[];
    constructor();
    private onLoad;
}
