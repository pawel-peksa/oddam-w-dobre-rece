import signature from "../../assets/signature.svg";
import { Element } from "react-scroll";

export const HomeAboutUs = () => {
  return (
    <Element name="aboutUs">
      <div className="aboutUs__container">
        <div className="text">
          <div className="text__container">
            <h2>O nas</h2>
            <p>
              Nori grape silver beet broccoli kombu beet greens fava bean potato
              quandong celery. Bunya nuts black-eyed pea prairie turnip leek
              lentil turnip greens parsnip.
            </p>
            <img className="signature__image" alt="signature" src={signature} />
          </div>
        </div>
        <div className="people__image" />
      </div>
    </Element>
  );
};
