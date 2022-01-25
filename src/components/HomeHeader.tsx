import { Button } from "./Button";

export const HomeHeader = () => {
  return (
    <div className="homeHeader__container">
      <div className="navUser__container">
        <Button type="router" btnText="Zaloguj" link="logowanie" />
        <Button type="router" btnText="Załóż konto" link="rejestracja" />
      </div>
      <div className="navMain__container">
        <Button type="scroll" link="" btnText="Start" />
        <Button type="scroll" link="oCoChodzi" btnText="O co chodzi?" />
        <Button type="scroll" link="aboutUs" btnText="O nas" />
        <Button
          type="scroll"
          link="organizations"
          btnText="Fundacja i organizacje"
        />
        <Button type="scroll" link="" btnText="Kontakt" />
      </div>
      <div className="cta__container">
        <h1>
          Zacznij pomagać!
          <br />
          Oddaj niechciane rzeczy w zaufane ręce
        </h1>
        <div className="cta--buttonsWrapper">
          <Button type="router" link="logowanie" btnText="ODDAJ RZECZY" />
          <Button type="router" link="logowanie" btnText="ZORGANIZUJ ZBIÓRKĘ" />
        </div>
      </div>
    </div>
  );
};
