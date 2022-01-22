import { IFirebaseConfig } from "./config.interafce";
export declare class FirebaseLogger {
    private application;
    private db;
    private firebaseConfig;
    constructor();
    setFirebaseConfig(firebaseConfig: IFirebaseConfig): void;
    initialize(): void;
    writeData(appName: string, key: string | undefined, value: string | object): Promise<void>;
    readData(collectionName: string): Promise<any[]>;
}
