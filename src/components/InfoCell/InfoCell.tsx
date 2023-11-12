import React from "react";
import "./InfoCell.css";
import clock from "../../img/clock.svg";
import flag from "../../img/flag.svg";
import cat from "../../img/cat.png";
import { useAppSelector } from "../../hooks";

const InfoCell = () => {
  const flags = useAppSelector((state) => state.game.flags);
  const timer = 0;
  return (
    <div className="cell-root">
      <div className="cell-fragment">
        <img src={clock} alt="" />
        <div>{timer}</div>
      </div>
      <img src={cat} alt="" className="cat-img" />
      <div className="cell-fragment">
        <img src={flag} alt="" />
        <div>{flags}</div>
      </div>
    </div>
  );
};

export default InfoCell;
