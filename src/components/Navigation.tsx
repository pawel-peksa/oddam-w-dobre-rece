import { FunctionComponent } from "react";
import { Button } from "./Button";

type Props = {
  children?: React.ReactNode;
};
export const Navigation: FunctionComponent = ({ children }: Props) => {
  return (
    <div className="homeHeader__container">
      <div className="navUser__container">
        <Button linkType="router" btnText="Zaloguj" link="logowanie" />
        <Button linkType="router" btnText="Załóż konto" link="rejestracja" />
      </div>
      <div className="navMain__container">
        <Button linkType="scroll" link="" btnText="Start" />
        <Button linkType="scroll" link="oCoChodzi" btnText="O co chodzi?" />
        <Button linkType="scroll" link="aboutUs" btnText="O nas" />
        <Button
          linkType="scroll"
          link="organizations"
          btnText="Fundacja i organizacje"
        />
        <Button linkType="scroll" link="contact" btnText="Kontakt" />
      </div>
      {children}
    </div>
  );
};
