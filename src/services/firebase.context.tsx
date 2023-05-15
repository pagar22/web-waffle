import React, { createContext } from "react";
import { FirebaseApp, initializeApp } from "@firebase/app";
import { Firestore, getFirestore } from "@firebase/firestore";
// internal
import { ContextProps } from "@/pages/_app";

interface FirebaseContextType {
  app: FirebaseApp;
  db: Firestore;
}

export const FirebaseContext = createContext<FirebaseContextType>(
  {} as FirebaseContextType
);

export const FirebaseContextProvider = ({ children }: ContextProps) => {
  const firebaseConfig = {
    apiKey: "AIzaSyBxqRox7U_6DQ9UnhRns-Pin4pSfMW7z6I",
    authDomain: "web-waffle-test.firebaseapp.com",
    projectId: "web-waffle-test",
    storageBucket: "web-waffle-test.appspot.com",
    messagingSenderId: "150030000991",
    appId: "1:150030000991:web:5902fbcb5bb0fed5f20cea",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  return (
    <FirebaseContext.Provider value={{ app, db }}>
      {children}
    </FirebaseContext.Provider>
  );
};
