import { Element } from "react-scroll";

export const HomeContact = () => {
  return (
    <Element name="contact">
      <footer className="homeContact__container">
        <div className="contentWrapper">
          <div className="form__container">
            <h2>Skontaktuj się z nami</h2>
            <form>
              <div className="horizontal">
                <label htmlFor="name">
                  Wpisz swoje imię
                  <input name="name" type="text" placeholder="John" />
                </label>
                <label htmlFor="email">
                  Wpisz swój email
                  <input name="email" type="email" placeholder="xyz@abc.com" />
                </label>
              </div>
              <label htmlFor="message">
                Wpisz swoją wiadomość
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
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
