import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyACXnWDPSl7NpAf3_Gys6AEDHvhKFxeQxI",
    authDomain: "twitter-clone-ce64c.firebaseapp.com",
    projectId: "twitter-clone-ce64c",
    storageBucket: "twitter-clone-ce64c.appspot.com",
    messagingSenderId: "909869906014",
    appId: "1:909869906014:web:2913a1fb3030f56232dccf"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };