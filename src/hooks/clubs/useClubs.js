import { useContext } from "react";
import { useInfiniteQuery } from "react-query";
import {
  query,
  limit,
  getDocs,
  orderBy,
  collection,
  startAfter,
} from "@firebase/firestore";
import { FirebaseContext } from "@/services/firebase.context";

export const useClubs = (itemsLimit = 10) => {
  const { db } = useContext(FirebaseContext);

  return useInfiniteQuery(
    ["clubs"],
    async ({ pageParam }) => {
      let q = query(
        collection(db, "clubs"),
        orderBy("name", "asc"),
        limit(itemsLimit)
      );
      if (pageParam) {
        q = query(q, startAfter(pageParam));
      }

      return (await getDocs(q).then((snapshot) => snapshot.docs)).flatMap(
        (doc) => doc.data()
      );
    },
    {
      getNextPageParam: (snapshot) =>
        snapshot?.length > 0 ? snapshot[snapshot.length - 1] : undefined,
    }
  );
};
