import { doc, getDoc } from "@firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "@/services/firebase.context";

export const usePlayer = (playerID) => {
  const { db } = useContext(FirebaseContext);
  const [player, setPlayer] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsub = getDoc(doc(db, `players/${playerID}`)).then((doc) => {
      setPlayer(doc.data());
      setIsLoading(false);
    });

    return () => unsub;
  }, [playerID]);

  return { data: player, isLoading: isLoading };
};
