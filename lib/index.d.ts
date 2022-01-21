import { IFirebaseConfig } from "./firebase-config.interafce";
export declare class NgxFirebaseLoggerService {
    private application;
    private db;
    firebaseConfig: IFirebaseConfig;
    constructor();
    writeLogs(appName: string, key: string, value: string | object): Promise<void>;
    readLogs(appName: string, firstName: string, collectionType: string): Promise<any[]>;
}
