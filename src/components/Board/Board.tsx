import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CreateGrid } from "../../utils";
import BoardElement from "./BoardElement";

const BoardRoot = styled.div``;
const RowDiv = styled.div`
  display: flex;
`;

export type MaskState = "active" | "unactive" | "flaged";

const Board = () => {
  const gridSize = 15;
  const mineCount = 10;
  const [grid, setGrid] = useState(() => CreateGrid(gridSize, mineCount));
  const demension = new Array(gridSize).fill(0);
  const [mask, setMask] = useState<MaskState[]>(() =>
    new Array(gridSize * gridSize).fill("unactive")
  );

  const onHandelClick = (x: number, y: number) => {
    if (mask[y * gridSize + x] === "active") return;

    const clearingCoords: [number, number][] = [];

    function clear(x: number, y: number) {
      if (mask[y * gridSize + x] === "active") return;
      if (x >= 0 && x < gridSize && y >= 0 && y < gridSize) {
        clearingCoords.push([x, y]);
      }
    }

    clear(x, y);

    while (clearingCoords.length) {
      const [x, y] = clearingCoords.pop()!!;
      mask[y * gridSize + x] = "active";

      if (grid[y * gridSize + x] !== 0) continue;
      clear(x + 1, y);
      clear(x - 1, y);
      clear(x, y + 1);
      clear(x, y - 1);
    }

    setMask((prev) => [...prev]);
  };

  return (
    <BoardRoot>
      {demension.map((_, y) => {
        return (
          <RowDiv key={y}>
            {demension.map((_, x) => {
              return (
                <BoardElement
                  key={x}
                  state={mask[y * gridSize + x]}
                  CountOfNeighbors={grid[y * gridSize + x]}
                  onHandelClick={() => onHandelClick(x, y)}
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
