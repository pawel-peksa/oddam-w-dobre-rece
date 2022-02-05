import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

interface Props {
  btnText: string;
  link: string;
  linkType: "router" | "scroll" | "state";
  action?: Function;
}

export const Button: FunctionComponent<Props> = ({
  btnText,
  link,
  linkType,
  action,
}: Props) => {
  const handleClick: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = (e) => {
    e.preventDefault();
    if (action) {
      // ask TypeScript
      if (btnText === "Wstecz") action((prev: number) => prev - 1);
      else if (btnText === "Dalej") action((prev: number) => prev + 1);
    }
  };

  let button;
  if (linkType === "router") {
    button = (
      <Link to={link}>
        <button>{btnText}</button>
      </Link>
    );
  } else if (linkType === "scroll") {
    button = (
      <Scroll to={link}>
        <button>{btnText}</button>
      </Scroll>
    );
  } else if (linkType === "state") {
    button = (
      <button onClick={handleClick} className="btn">
        {btnText}
      </button>
    );
  }
  return <>{button}</>;
};
