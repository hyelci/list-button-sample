import "./Button.css";
import missileIcon from "../assets/missile-icon.png";
import { useState } from "react";

function Button({ title }) {
  const [isClicked, setIsClicked] = useState(false);
  const [moveRocket, setMoveRocket] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setMoveRocket(true);
    }, 500);
  };

  return (
    <button className="btn" onClick={handleClick}>
      <span
        className={`purple-filling ${
          moveRocket ? "purple-filling-active" : ""
        }`}
      ></span>
      <img
        src={missileIcon}
        alt="missile icon"
        className={`btn-icon ${isClicked ? "rotate" : ""} ${
          moveRocket ? "btn-icon-move" : ""
        }`}
      />
      {!isClicked && <span>{title}</span>}
    </button>
  );
}

export default Button;
