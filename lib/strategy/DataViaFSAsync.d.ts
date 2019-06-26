import { LoadNamesStrategy } from '../Interfaces';
export declare class DataViaFSAsync implements LoadNamesStrategy {
    names: string[];
    constructor();
    private onLoad;
}
