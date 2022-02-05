export const FormStep2 = () => {
  return (
    <div className="step2">
      <h4>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h4>
      <label>
        Liczba 60l worków:
        <select className="select">
          <option value="" disabled selected>
            &#8212; wybierz &#8212;
          </option>

          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <span className="focus"></span>
    </div>
  );
};
