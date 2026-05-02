import { auth } from "../backend/firebase-config";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

export async function Login(email: string, password: string) {
  try {
    // set session persistence
    await setPersistence(auth, browserSessionPersistence);

    // sign in
    const userCred = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCred;
  } catch (err: any) {
    throw err.code || err.message;
  }
}
