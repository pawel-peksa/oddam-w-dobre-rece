import { useState } from "react";
import { Pagination } from "./Pagination";

export const HomeOrganizations = () => {
  const [organizationType, setOrganizationType] = useState<
    "charity" | "ngo" | "local collection event"
  >("charity");
  return (
    <section className="homeOrganizations__wrapper">
      <h2>Komu pomagamy?</h2>
      <nav className="homeOrganizationsButtons__wrapper">
        <button
          className={organizationType === "charity" ? "active" : ""}
          onClick={() => setOrganizationType("charity")}
        >
          Fundacjom
        </button>
        <button
          className={organizationType === "ngo" ? "active" : ""}
          onClick={() => setOrganizationType("ngo")}
        >
          Organizacjom pozarządowym
        </button>
        <button
          className={
            organizationType === "local collection event" ? "active" : ""
          }
          onClick={() => setOrganizationType("local collection event")}
        >
          Lokalnym zbiórkom
        </button>
      </nav>
      <article className="homeOrganizationContent">
        <p>
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </p>
        <Pagination />
      </article>
    </section>
  );
};
