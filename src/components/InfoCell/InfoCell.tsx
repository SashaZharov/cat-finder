import React from "react";
import "./InfoCell.css";
import clock from "../../img/clock.svg";
import flag from "../../img/flag.svg";
import cat from "../../img/cat.png";

type InfoCellProps = {
  timer: number;
  flags: number;
};

const InfoCell = ({ timer, flags }: InfoCellProps) => {
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
