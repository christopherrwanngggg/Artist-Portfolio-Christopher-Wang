import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import { storage, db, timeStamp } from "../backend/firebase-config";

import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { collection, addDoc } from "firebase/firestore";

const useStorage = (file: any) => {
  const [progress, setProgress] = useState(0);
  const [uploadError, setUploadError] = useState<any | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!file) return;

    // create storage reference
    const storageRef = ref(storage, `${nanoid()}-${file.label}`);

    // start upload
    const uploadTask = uploadBytesResumable(storageRef, file.image);

    uploadTask.on(
      "state_changed",
      (snap) => {
        const progress =
          (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        setUploadError(error);
        console.log(error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // add to Firestore
          await addDoc(collection(db, "images"), {
            url: downloadURL,
            label: file.label,
            description: file.description,
            forShowcase: file.forShowcase,
            createdAt: timeStamp,
          });

          setUrl(downloadURL);
        } catch (err) {
          setUploadError(err);
        }
      }
    );
  }, [file]);

  return { progress, url, uploadError };
};

export default useStorage;
