import { collection, getDocs } from "@firebase/firestore";
import { db } from "firebase.config";

export const useClubs = async (size = 10) => {
  const clubs = (await getDocs(collection(db, "seasons/2022/players"))).size;
  console.log(clubs);
  //   clubs.forEach((doc) => console.log(doc.data()));
};
