import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createUser } from "../auth/createUser";

type FormValues = {
  email: string;
  password: string;
  confirmPassword?: string;
};

export const Register: FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const handleClick = () => {
    navigate("/logowanie");
  };

  const handleRegister = (data: FormValues) => {
    const { email, password } = data;
    createUser({ email, password }, navigate);
  };

  return (
    <div className="authorization__container">
      <h2>Załóż konto</h2>
      <form>
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
        </div>
        <div className="buttons__wrapper">
          <button onClick={handleClick} style={{ borderWidth: 0 }}>
            Zaloguj się
          </button>
          <button onClick={handleSubmit((data) => handleRegister(data))}>
            Załóż konto
          </button>
        </div>
      </form>
    </div>
  );
};
