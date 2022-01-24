import { Button } from "./Button";

export const HomeHeader = () => {
  return <div className="homeHeader__container">
    <div className="navUser__container">
      <Button btnText="Zaloguj" link="logowanie"/>
      <Button btnText="Załóż konto" link="rejestracja"/>
    </div>
    <div className="navMain__container">
      <Button btnText="Start"/>
      <Button btnText="O co chodzi?"/>
      <Button btnText="O nas"/>
      <Button btnText="Fundacja i organizacje"/>
      <Button btnText="Kontakt"/>
    </div>
    <div className="cta__container">
      <h1>
        Zacznij pomagać!
        <br/>
        Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      <div className="cta--buttonsWrapper">
        <Button link="logowanie" btnText="ODDAJ RZECZY"/>
        <Button link="logowanie" btnText="ZORGANIZUJ ZBIÓRKĘ"/>
      </div>
    </div>
</div>
}
