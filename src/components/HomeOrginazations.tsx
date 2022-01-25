import { useState } from "react";
import { Pagination } from "./Pagination";
import { Element } from "react-scroll";

const charities = [
  {
    name: "Fundacja “Dbam o Zdrowie”",
    description:
      "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
    itemsToCollect: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
  },
  {
    name: "Fundacja “Dla dzieci”",
    description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
    itemsToCollect: "ubrania, meble, zabawki",
  },
  {
    name: "Fundacja “Bez domu”",
    description:
      "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    itemsToCollect: "ubrania, jedzenie, ciepłe koce",
  },
  {
    name: "Fundacja “Dla dzieci”",
    description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
    itemsToCollect: "ubrania, meble, zabawki",
  },
  {
    name: "Fundacja “Bez domu”",
    description:
      "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    itemsToCollect: "ubrania, jedzenie, ciepłe koce",
  },
  {
    name: "Fundacja “Bez domu”",
    description:
      "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    itemsToCollect: "ubrania, jedzenie, ciepłe koce",
  },
  {
    name: "Fundacja “Dbam o Zdrowie”",
    description:
      "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
    itemsToCollect: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
  },
  {
    name: "Fundacja “Bez domu”",
    description:
      "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    itemsToCollect: "ubrania, jedzenie, ciepłe koce",
  },
  {
    name: "Fundacja “Dla dzieci”",
    description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
    itemsToCollect: "ubrania, meble, zabawki",
  },
];

const ngos = [
  {
    name: "NGO “Lorem Ipsum 1”",
    description:
      "Quis varius quam quisque id diam vel quam elementum pulvinar.",
    itemsToCollect: "Egestas, sed, tempus",
  },
  {
    name: "NGO “Lorem Ipsum 2”",
    description:
      "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
    itemsToCollect: "Ut, aliquam, purus, sit, amet",
  },
  {
    name: "NGO “Lorem Ipsum 3”",
    description: "Scelerisque in dictum non consectetur a erat nam.",
    itemsToCollect: "Mi, quis, hendrerit, dolor",
  },
  {
    name: "NGO “Lorem Ipsum 4”",
    description:
      "Quis varius quam quisque id diam vel quam elementum pulvinar.",
    itemsToCollect: "Egestas, sed, tempus",
  },
  {
    name: "NGO “Lorem Ipsum 5”",
    description:
      "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
    itemsToCollect: "Ut, aliquam, purus, sit, amet",
  },
  {
    name: "NGO “Lorem Ipsum 6”",
    description: "Scelerisque in dictum non consectetur a erat nam.",
    itemsToCollect: "Mi, quis, hendrerit, dolor",
  },
];

const localEvents = [
  {
    name: "Local collection “Lorem Ipsum 1”",
    description:
      "Quis varius quam quisque id diam vel quam elementum pulvinar.",
    itemsToCollect: "Egestas, sed, tempus",
  },
  {
    name: "Local collection “Lorem Ipsum 2”",
    description:
      "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
    itemsToCollect: "Ut, aliquam, purus, sit, amet",
  },
  {
    name: "Local collection “Lorem Ipsum 3”",
    description: "Scelerisque in dictum non consectetur a erat nam.",
    itemsToCollect: "Mi, quis, hendrerit, dolor",
  },
];
export const HomeOrganizations = () => {
  const [organizationType, setOrganizationType] = useState<
    "charity" | "ngo" | "local collection event"
  >("charity");
  const [currentPage, setCurrentPage] = useState<number>(1);

  let toDisplay;
  let typeDescription;
  if (organizationType === "charity") {
    toDisplay = charities;
    typeDescription =
      "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.";
  } else if (organizationType === "ngo") {
    typeDescription =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";
    toDisplay = ngos;
  } else {
    typeDescription =
      "Local charity collections... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";
    toDisplay = localEvents;
  }

  const onButtonClick = (
    type: "charity" | "ngo" | "local collection event"
  ): void => {
    setOrganizationType(type);
    setCurrentPage(1);
  };

  return (
    <Element name="organizations">
      <section className="homeOrganizations__wrapper">
        <h2>Komu pomagamy?</h2>
        <nav className="homeOrganizationsButtons__wrapper">
          <button
            className={organizationType === "charity" ? "active" : ""}
            onClick={() => onButtonClick("charity")}
          >
            Fundacjom
          </button>
          <button
            className={organizationType === "ngo" ? "active" : ""}
            onClick={() => onButtonClick("ngo")}
          >
            Organizacjom pozarządowym
          </button>
          <button
            className={
              organizationType === "local collection event" ? "active" : ""
            }
            onClick={() => onButtonClick("local collection event")}
          >
            Lokalnym zbiórkom
          </button>
        </nav>
        <article className="homeOrganizationContent">
          <p className="typeDescription">{typeDescription}</p>
          <Pagination
            toDisplay={toDisplay}
            itemsPerPage={3}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </article>
      </section>
    </Element>
  );
};
