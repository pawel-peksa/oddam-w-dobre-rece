import { useState } from "react";
import { Button } from "../Button";
import { FormImportant } from "./FormImportant";
import { FormStep1 } from "./FormStep1";
import { FormStep2 } from "./FormStep2";

export const FormSteps = () => {
  const [step, setStep] = useState<number>(1);

  let form;
  switch (step) {
    case 1:
      form = <FormStep1 />;
      break;
    case 2:
      form = <FormStep2 />;
      break;

    default:
      break;
  }
  return (
    <div className="form__container">
      <FormImportant step={step} />
      <div className="formSteps__background">
        <div className="wrapper">
          <h5>Krok {step}/4</h5>
          {form}
          <div className="btn__wrapper">
            {step !== 1 && (
              <Button
                link={""} //not elegant, I know..
                action={setStep}
                btnText="Wstecz"
                linkType="state"
              />
            )}
            <Button
              link={""} //not elegant, I know..
              action={setStep}
              btnText={step === 4 ? "Potwierdzam" : "Dalej"}
              linkType="state"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
