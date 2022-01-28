import { auth } from "../settings/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { UserInterface } from "../interfaces/UserInterface";
import { NavigateFunction } from "react-router-dom";

export const loginUser = async (
  { email, password }: UserInterface,
  navigate: NavigateFunction,
  setError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setError(false);
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
  } catch (error: any) {
    console.log("error:", error.code);
    setError(true);
  }
};
