export const FormStep1 = () => {
  return (
    <div className="step1">
      <h4>Zaznacz co chcesz oddać:</h4>
      <label className="checkbox">
        <input type="checkbox" />
        <span></span>
        ubrania, które nadają się do ponownego użycia
      </label>
      <label className="checkbox">
        <input type="checkbox" />
        <span></span>
        ubrania, do wyrzucenia
      </label>
      <label className="checkbox">
        <input type="checkbox" />
        <span></span>
        zabawki
      </label>
      <label className="checkbox">
        <input type="checkbox" />
        <span></span>
        książki
      </label>
      <label className="checkbox">
        <input type="checkbox" />
        <span></span>
        Inne
      </label>
    </div>
  );
};
