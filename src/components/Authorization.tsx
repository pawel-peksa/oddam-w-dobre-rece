import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
  confirmPassword?: string;
};

type Props = {
  registration: boolean;
};
export const Authorization: FC<Props> = ({ registration }: Props) => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onRegisterClick = () => {
    if (registration) {
      // console.log("tutaj pójdzie firebase hook");
    } else {
      navigate("/rejestracja");
    }
  };

  const onLoginClick = () => {
    if (!registration) {
      // handleSubmit((data) => console.log(data));
    } else {
      navigate("/logowanie");
    }
  };

  return (
    <div className="authorization__container">
      <h2>{registration ? "Załóż konto" : "Zaloguj się"}</h2>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="form__wrapper">
          <label>
            Email
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern:
                  /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/,
              })}
              style={{ borderColor: errors.email ? "red" : "" }}
            />
            <p className={errors.email ? "error" : "hidden"}>
              Podany email jest nieprawidłowy!
            </p>
          </label>
          <label>
            Hasło
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              style={{ borderColor: errors.password ? "red" : "" }}
            />
            <p className={errors.password ? "error" : "hidden"}>
              Podane hasło jest za krótkie!
            </p>
          </label>
          {registration && (
            <label>
              Powtórz Hasło
              <input
                type="password"
                {...register("confirmPassword", {
                  required: true,
                  minLength: 6,
                })}
                style={{ borderColor: errors.confirmPassword ? "red" : "" }}
              />
              <p className={errors.confirmPassword ? "error" : "hidden"}>
                Podane hasła są różne!
              </p>
            </label>
          )}
        </div>
        <div
          className="buttons__wrapper"
          style={{ flexDirection: registration ? "row-reverse" : "row" }}
        >
          <button
            onClick={onRegisterClick}
            style={{ borderWidth: registration ? "1" : "0" }}
          >
            Załóż konto
          </button>
          <button
            onClick={onLoginClick}
            style={{ borderWidth: registration ? "0" : "1" }}
          >
            Zaloguj się
          </button>
        </div>
      </form>
    </div>
  );
};
