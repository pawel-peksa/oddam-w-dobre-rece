import { useState } from "react";
import { Element } from "react-scroll";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export const HomeContact = () => {
  const [success, setSuccess] = useState<Boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const sendData = (data: FormValues): void => {
    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => {
      if (resp.status === 200) {
        setSuccess(true);
        reset();
      } else console.log(resp);
    });
  };

  return (
    <Element name="contact">
      <footer className="homeContact__container">
        <div className="contentWrapper">
          <div className="form__container">
            <h2>Skontaktuj się z nami</h2>
            <h4 className={success ? "" : "hidden"}>
              Wiadomość została wysłana! <br /> Wkrótce się skontaktujemy.
            </h4>
            <form onSubmit={handleSubmit((data) => sendData(data))}>
              <div className="horizontal">
                <label htmlFor="name">
                  Wpisz swoje imię
                  <input
                    {...register("name", {
                      required: true,
                      pattern: /^\S*$/,
                    })}
                    type="text"
                    placeholder="John"
                    style={{ borderColor: errors.name ? "red" : "" }}
                  />
                  <p className={errors.name ? "error" : "hidden"}>
                    Podane imię jest nieprawidłowe!
                  </p>
                </label>
                <label htmlFor="email">
                  Wpisz swój email
                  <input
                    {...register("email", {
                      required: true,
                      pattern:
                        /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/,
                    })}
                    type="email"
                    placeholder="xyz@abc.com"
                    style={{ borderColor: errors.email ? "red" : "" }}
                  />
                  <p className={errors.email ? "error" : "hidden"}>
                    Podany email jest nieprawidłowy!
                  </p>
                </label>
              </div>
              <label htmlFor="message">
                Wpisz swoją wiadomość
                <textarea
                  {...register("message", { required: true, minLength: 120 })}
                  rows={5}
                  style={{ borderColor: errors.message ? "red" : "" }}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <p className={errors.message ? "error" : "hidden"}>
                  Wiadomość musi mieć conajmniej 120 znaków!
                </p>
              </label>
              <input type="submit" value="Wyślij" />
            </form>
          </div>
          <div className="copyright">
            <p>
              Copyright by{" "}
              <a
                href="https://github.com/pawel-peksa"
                target="_blank"
                rel="noreferrer"
              >
                Paweł Peksa
              </a>
            </p>
            <div className="socialIcons">
              <a href="https://facebook.com">
                <div className="facebook" />
              </a>
              <a href="https://instagram.com">
                <div className="instagram" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Element>
  );
};
