import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginUser } from "../auth/loginUser";

type FormValues = {
  email: string;
  password: string;
  confirmPassword?: string;
};

export const Login: FC = () => {
  const [error, setError] = useState(false);
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const handleClick = () => {
    navigate("/rejestracja");
  };

  const handleLogin = (data: FormValues) => {
    const { email, password } = data;
    loginUser({ email, password }, navigate, setError);
  };
  return (
    <div className="authorization__container">
      <h2>Zaloguj się</h2>
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
        </div>
        {error && (
          <p
            style={{
              color: "red",
              textAlign: "center",
              fontSize: 14,
              marginTop: 5,
            }}
          >
            Wprowadzono nieprawidłowe dane
          </p>
        )}
        <div className="buttons__wrapper">
          <button onClick={handleClick} style={{ borderWidth: "0" }}>
            Załóż konto
          </button>
          <button onClick={handleSubmit((data) => handleLogin(data))}>
            Zaloguj się
          </button>
        </div>
      </form>
    </div>
  );
};
