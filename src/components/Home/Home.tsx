import { HomeAboutUs } from "./HomeAboutUs";
import { HomeContact } from "./HomeContact";
import { HomeFourSimpleSteps } from "./HomeFourSimpleSteps";
import { HomeHeader } from "./HomeHeader";
import { HomeOrganizations } from "./HomeOrginazations";
import { HomeThreeColumns } from "./HomeThreeColumns";
import { Navigation } from "../Navigation";

const Home = () => {
  return (
    <div className="background">
      <Navigation>
        <HomeHeader />
      </Navigation>
      <HomeThreeColumns />
      <HomeFourSimpleSteps />
      <HomeAboutUs />
      <HomeOrganizations />
      <HomeContact />
    </div>
  );
};

export default Home;
