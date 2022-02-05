export const FormHeader = () => {
  return (
    <div className="cta__container">
      <h1>
        Oddaj rzeczy, których już nie chcesz
        <br />
        POTRZEBUJĄCYM
      </h1>
      <h3 className="subheader">Wystarczą 4 proste kroki</h3>
      <div className="boxes__container">
        <div className="box--single">
          <p className="box--number">1</p>
          <p className="box--text">
            Wybierz
            <br />
            rzeczy
          </p>
        </div>
        <div className="box--single">
          <p className="box--number">2</p>
          <p className="box--text">
            Spakuj je
            <br />w worki
          </p>
        </div>
        <div className="box--single">
          <p className="box--number">3</p>
          <p className="box--text">
            Wybierz
            <br />
            fundację
          </p>
        </div>
        <div className="box--single">
          <p className="box--number">4</p>
          <p className="box--text">
            Zamów
            <br />
            kuriera
          </p>
        </div>
      </div>
    </div>
  );
};
