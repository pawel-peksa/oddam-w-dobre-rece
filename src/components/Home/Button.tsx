import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

interface Props {
  btnText: string;
  link: string;
  type: "router" | "scroll";
}

export const Button = ({ btnText, link, type }: Props) => {
  return type === "router" ? (
    <Link to={link}>
      <button>{btnText}</button>
    </Link>
  ) : (
    <Scroll to={link}>
      <button>{btnText}</button>
    </Scroll>
  );
};
