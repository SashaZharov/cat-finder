import React, { useState } from "react";
import styled from "styled-components";
import { MaskState } from "./Board";

const Element = styled.div<{ state?: MaskState }>`
  height: 40px;
  width: 40px;
  margin: 2px;
  background-color: #51f20c;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

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
  return (
    <Element onClick={onHandelClick} onContextMenu={onRightMouseClick}>
      {state === "flaged" ? "F" : ""}
      {state === "active" ? CountOfNeighbors : ""}
    </Element>
  );
};

export default BoardElement;
