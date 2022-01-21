import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore/lite";
import { IFirebaseConfig } from "./firebase-config.interafce";

export class NgxFirebaseLoggerService {
  private application;
  private db;
  public firebaseConfig: IFirebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
  };

  constructor() {
    this.application = initializeApp(this.firebaseConfig);
    this.db = getFirestore(this.application);
  }

  public async writeLogs(
    appName: string,
    key: string,
    value: string | object
  ): Promise<void> {
    await setDoc(doc(this.db, appName, new Date().toUTCString()), {
      key: key,
      value: value,
    });
  }

  public async readLogs(
    appName: string,
    firstName: string,
    collectionType: string
  ): Promise<any[]> {
    return new Promise<any[]>(async (resolve: any) => {
      let arr: any[] = [];
      const querySnapshot = await getDocs(
        collection(this.db, `${appName} : ${firstName} : ${collectionType}`)
      );
      // resolve(querySnapshot);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        arr.push(doc.data());
      });
      resolve(arr);
    });
  }
}
