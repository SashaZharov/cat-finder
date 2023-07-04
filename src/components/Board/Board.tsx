import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CreateGrid } from "../../utils";
import BoardElement from "./BoardElement";

const BoardRoot = styled.div``;
const RowDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const Board = () => {
  const gridSize = 15;
  const mineCount = 10;
  const [grid, setGrid] = useState(() => CreateGrid(gridSize, mineCount));

  const demension = new Array(gridSize).fill(0);

  return (
    <BoardRoot>
      {demension.map((_, y) => {
        return (
          <RowDiv key={y}>
            {demension.map((_, x) => {
              return (
                <BoardElement
                  key={x}
                  state="active"
                  neighborsNumber={grid[y * gridSize + x]}
                />
              );
            })}
          </RowDiv>
        );
      })}
    </BoardRoot>
  );
};

export default Board;
