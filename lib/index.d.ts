import { IFirebaseConfig } from "./config.interafce";
export declare class FirebaseLogger {
    private application;
    private db;
    firebaseConfig: IFirebaseConfig;
    constructor();
    writeData(appName: string, key: string, value: string | object): Promise<void>;
    readData(collectionName: string): Promise<any[]>;
}
