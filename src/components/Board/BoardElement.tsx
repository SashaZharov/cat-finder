import React, { useState } from "react";
import styled from "styled-components";
import { MaskState } from "./Board";

const Element = styled.div<{ state?: MaskState }>`
  padding: 10px;
  margin: 2px;
  background-color: "#f2f20c";
`;

type BoardProps = {
  state: MaskState;
  CountOfNeighbors: number;
  onHandelClick: () => void;
};

const BoardElement = ({
  state,
  onHandelClick,
  CountOfNeighbors,
}: BoardProps) => {
  return (
    <Element onClick={onHandelClick}>
      {state === "active" ? CountOfNeighbors : "-"}
    </Element>
  );
};

export default BoardElement;
