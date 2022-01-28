import { auth } from "../settings/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserInterface } from "../interfaces/UserInterface";
import { NavigateFunction } from "react-router-dom";

export const createUser = async (
  { email, password }: UserInterface,
  navigate: NavigateFunction
) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("konto utworzone!");
    navigate("/");
  } catch (error: any) {
    console.log("error:", error.code);
  }
};
