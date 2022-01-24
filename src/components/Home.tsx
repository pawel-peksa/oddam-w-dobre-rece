import { HomeFourSimpleSteps } from "./HomeFourSimpleSteps";
import { HomeHeader } from "./HomeHeader";
import { HomeThreeColumns } from "./HomeThreeColumns";

export const Home = () => {
  return (
    <div className="background">
      <HomeHeader />
      <HomeThreeColumns />
      <HomeFourSimpleSteps />
    </div>)
};
