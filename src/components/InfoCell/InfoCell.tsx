import React from "react";
import "./InfoCell.css";
import clock from "../../img/clock.svg";
import flag from "../../img/flag.svg";
import cat from "../../img/cat.png";
import { useAppSelector } from "../../hooks";
import Timer from "../Timer";

const InfoCell = () => {
  const flags = useAppSelector((state) => state.game.flags);

  return (
    <div className="cell-root">
      <div className="cell-fragment">
        <img src={clock} alt="" />
        <Timer minutes={2} />
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
