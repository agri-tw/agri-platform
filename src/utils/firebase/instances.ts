import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { firebaseOptions } from "@/constants/firebase";

export const firebaseApp = initializeApp(firebaseOptions);

export const firebaseAnalytics = getAnalytics(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);
export const firestore = getFirestore(firebaseApp);
