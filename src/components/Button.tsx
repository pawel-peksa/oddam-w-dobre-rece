import { Link } from "react-router-dom";

interface Props {
  btnText: string;
  link?: string;
}

export const Button = ({btnText, link}:Props) => {
  return link ? (<Link to={link}><button>{btnText}</button></Link>) : (<button>{btnText}</button>)
  }
