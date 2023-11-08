import React from "react";
import "./BoardElement.css";
import { MaskState } from "../Board";

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
  }

  return (
    <div
      className={elementClass}
      onClick={onHandelClick}
      onContextMenu={onRightMouseClick}
    >
      {state === "flaged" ? "F" : ""}
      {state === "active" ? CountOfNeighbors : ""}
    </div>
  );
};

export default BoardElement;
