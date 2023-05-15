import { useQuery } from "react-query";
import { doc, getDoc } from "@firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "@/services/firebase.context";

export const useClub = (clubID) => {
  const { db } = useContext(FirebaseContext);
  const [club, setClub] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsub = getDoc(doc(db, `clubs/${clubID}`)).then((doc) => {
      setClub(doc.data());
      setIsLoading(false);
    });

    return () => unsub;
  }, [clubID]);

  return { data: club, isLoading: isLoading };
};
