import { auth } from "../settings/firebaseConfig";
import { Navigate } from "react-router-dom";

export interface IAuthRouteProps {
  error: string;
}

type Props = {
  children?: React.ReactNode;
};

export const AuthRoute = ({ children }: Props) => {
  if (!auth.currentUser) {
    return <Navigate to="/logowanie" />;
  }

  return <>{children}</>;
};
