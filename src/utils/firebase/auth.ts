import { GoogleAuthProvider, onAuthStateChanged, User } from "firebase/auth";

import { firebaseAuth } from "./instances";

export const loadCurrentUser = (): Promise<User | null> =>
    new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            resolve(user);
            unsubscribe();
        });
    });

export const firebaseAuthProviders = {
    google: new GoogleAuthProvider(),
};
