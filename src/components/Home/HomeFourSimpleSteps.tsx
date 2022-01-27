import { Button } from "./Button";
import shirt from "../../assets/shirt.svg";
import bag from "../../assets/bag.svg";
import search from "../../assets/search.svg";
import recycle from "../../assets/recycle.svg";
import { ColumnStep } from "./ColumnStep";
import { Element } from "react-scroll";

export const HomeFourSimpleSteps = () => {
  return (
    <Element name="oCoChodzi">
      <div className="fourSimpleSteps__container">
        <h2>Wystarczą 4 proste kroki</h2>

        <div className="fourColumnsBackground">
          <div className="fourColumns__wrapper">
            <ColumnStep
              title="Wybierz rzeczy"
              description="ubrania, zabawki, sprzęt i inne"
              alt="shirt"
              src={shirt}
            />
            <ColumnStep
              title="Spakuj je"
              description="skorzystaj z worków na śmieci"
              alt="bag"
              src={bag}
            />
            <ColumnStep
              title="Zdecyduj komu chcesz pomóc"
              description="wybierz zaufane miejsce"
              alt="search"
              src={search}
            />
            <ColumnStep
              title="Zamów kuriera"
              description="kurier przyjedzie w dogodnym terminie"
              alt="recycle"
              src={recycle}
            />
          </div>
        </div>
        <Button type="router" link="logowanie" btnText="ODDAJ RZECZY" />
      </div>
    </Element>
  );
};
