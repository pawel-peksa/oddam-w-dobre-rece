import { FC } from "react";
import { Authorization } from "./Authorization";

export const Register: FC = () => {
  return <Authorization registration={true} />;
};
