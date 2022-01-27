import { FC } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  register: boolean;
};
export const Authorization: FC<Props> = ({ register }: Props) => {
  let navigate = useNavigate();

  const onRegisterClick = () => {
    if (register) {
      console.log("tutaj pójdzie firebase hook");
    } else {
      navigate("/rejestracja");
    }
  };

  const onLoginClick = () => {
    if (!register) {
      console.log("tutaj pójdzie firebase hook");
    } else {
      navigate("/logowanie");
    }
  };

  return (
    <div className="authorization__container">
      <h2>{register ? "Załóż konto" : "Zaloguj się"}</h2>
      <form>
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Hasło
          <input type="password" />
        </label>
        {register && (
          <label>
            Powtórz Hasło
            <input type="password" />
          </label>
        )}
      </form>
      <div
        className="buttons__wrapper"
        style={{ flexDirection: register ? "row-reverse" : "row" }}
      >
        <button
          onClick={onRegisterClick}
          style={{ borderWidth: register ? "1" : "0" }}
        >
          Załóż konto
        </button>
        <button
          onClick={onLoginClick}
          style={{ borderWidth: register ? "0" : "1" }}
        >
          Zaloguj się
        </button>
      </div>
    </div>
  );
};
