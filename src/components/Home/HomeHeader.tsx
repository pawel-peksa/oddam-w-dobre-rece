import { Button } from "../Button";

export const HomeHeader = () => {
  return (
    <div className="cta__container">
      <h1>
        Zacznij pomagać!
        <br />
        Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      <div className="cta--buttonsWrapper">
        <Button linkType="router" link="logowanie" btnText="ODDAJ RZECZY" />
        <Button
          linkType="router"
          link="logowanie"
          btnText="ZORGANIZUJ ZBIÓRKĘ"
        />
      </div>
    </div>
  );
};
