import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

interface Props {
  btnText: string;
  link: string;
  linkType: "router" | "scroll";
}

export const Button: FunctionComponent<Props> = ({
  btnText,
  link,
  linkType,
}: Props) => {
  return (
    <>
      {linkType === "router" ? (
        <Link to={link}>
          <button>{btnText}</button>
        </Link>
      ) : (
        <Scroll to={link}>
          <button>{btnText}</button>
        </Scroll>
      )}
    </>
  );
};
