import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../backend/firebase-config";

const useDatabase = (collectionName: string, limit: boolean) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (snap) => {
        let documents: any = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });

	setImages(documents);
 }
);


    return () => unsubscribe();
  }, [collectionName]);

  return images;
};

export default useDatabase;
