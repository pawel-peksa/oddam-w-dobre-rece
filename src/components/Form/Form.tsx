import { Contact } from "../Contact";
import { Navigation } from "../Navigation";
import { FormHeader } from "./FormHeader";
import { FormSteps } from "./FormSteps";

const Form = () => {
  return (
    <form className="background__form">
      <Navigation>
        <FormHeader />
      </Navigation>
      <FormSteps />
      <Contact />
    </form>
  );
};

export default Form;
