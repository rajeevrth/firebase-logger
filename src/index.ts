import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore/lite";
import { IFirebaseConfig } from "./config.interafce";

export class FirebaseLogger {
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

  public async writeData(
    appName: string,
    key: string,
    value: string | object
  ): Promise<void> {
    await setDoc(doc(this.db, appName, new Date().toUTCString()), {
      key: key,
      value: value,
    });
  }

  public async readData(collectionName: string): Promise<any[]> {
    return new Promise<any[]>(async (resolve: any) => {
      let arr: any[] = [];
      const querySnapshot = await getDocs(
        collection(this.db, `${collectionName}`)
      );
      querySnapshot.forEach((doc) => {
        arr.push(doc.data());
      });
      resolve(arr);
    });
  }
}
