import React from "react";
import "./BoardElement.css";
import { MaskState } from "../Board";
import flag from "../../img/flag.svg";
import cat from "../../img/cat.png";

type BoardProps = {
  state: MaskState;
  CountOfNeighbors: number;
  onHandelClick?: () => void;
  onRightMouseClick?: (event: any) => void;
};

const BoardElement = ({
  state,
  onHandelClick,
  onRightMouseClick,
  CountOfNeighbors,
}: BoardProps) => {
  let elementClass = "element";

  if (CountOfNeighbors === -1 && state === "active") {
    elementClass += " disabled";
  } else if (state === "active") {
    elementClass += ` number-${CountOfNeighbors}`;
  }

  return (
    <div
      className={elementClass}
      onClick={onHandelClick}
      onContextMenu={onRightMouseClick}
    >
      {state === "flaged" && <img src={flag} alt="" />}
      {state === "active" && CountOfNeighbors !== -1 && CountOfNeighbors}
      {state === "active" && CountOfNeighbors === -1 ? (
        <img src={cat} className="cat-element" alt="" />
      ) : (
        <></>
      )}
    </div>
  );
};

export default BoardElement;
