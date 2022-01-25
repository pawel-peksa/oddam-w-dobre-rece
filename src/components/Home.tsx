import { HomeAboutUs } from "./HomeAboutUs";
import { HomeContact } from "./HomeContact";
import { HomeFourSimpleSteps } from "./HomeFourSimpleSteps";
import { HomeHeader } from "./HomeHeader";
import { HomeOrganizations } from "./HomeOrginazations";
import { HomeThreeColumns } from "./HomeThreeColumns";

export const Home = () => {
  return (
    <div className="background">
      <HomeHeader />
      <HomeThreeColumns />
      <HomeFourSimpleSteps />
      <HomeAboutUs />
      <HomeOrganizations />
      <HomeContact />
    </div>
  );
};
