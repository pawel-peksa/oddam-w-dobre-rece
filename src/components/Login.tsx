import { FunctionComponent } from "react";
import { Authorization } from "./Authorization";

export const Login: FunctionComponent = () => {
  return <Authorization register={false} />;
};
