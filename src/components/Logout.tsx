import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="logout__container">
      <h2>
        Wylogowanie <br /> nastąpiło pomyślnie!
      </h2>
      <button onClick={handleClick}>Strona główna</button>
    </div>
  );
};
