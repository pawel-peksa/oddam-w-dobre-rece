import { Props } from "./interfaces";

export const FormImportant = ({ step }: Props) => {
  let msg;

  switch (step) {
    case 1:
      msg =
        "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.";
      break;
    case 2:
      msg =
        "      Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.";
      break;
    case 3:
      msg =
        "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.";
      break;
    case 4:
      msg = "Podaj adres oraz termin odbioru rzeczy.";
  }

  return (
    <div className="form__important">
      <div className="wrapper">
        <h4>Ważne!</h4>
        <p>{msg}</p>
      </div>
    </div>
  );
};
