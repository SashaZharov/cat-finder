import React, { useEffect, useState } from "react";
import "./Board.css";
import { CreateGrid } from "../../utils";
import BoardElement from "./BoardElement";
import { GameStatus } from "../Game";

export type MaskState = "active" | "inactive" | "flaged";

type BoardProps = {
  setGameStatus: React.Dispatch<React.SetStateAction<GameStatus>>;
  gameStatus: GameStatus;
};

const Board: React.FC<BoardProps> = ({ setGameStatus, gameStatus }) => {
  const gridSize = 10;
  const mineCount = 10;
  const [flags, setFlags] = useState(mineCount);
  const [disabled, setDisabled] = useState(0);
  const [activeCount, setActiveCount] = useState(0);
  const [grid, setGrid] = useState(() => CreateGrid(gridSize, mineCount));
  const [mask, setMask] = useState<MaskState[]>(() =>
    new Array(gridSize * gridSize).fill("inactive")
  );
  const demension = new Array(gridSize).fill(0);

  const onHandelClick = (x: number, y: number) => {
    if (mask[y * gridSize + x] === "flaged") return;

    //Check lose
    if (grid[y * gridSize + x] === -1) {
      setGameStatus("lose");
      setMask(() => new Array(gridSize * gridSize).fill("active"));
    }

    //clearing game map
    const clearingCoords: [number, number][] = [];

    const clear = (x: number, y: number) => {
      if (mask[y * gridSize + x] === "active") return;
      if (x >= 0 && x < gridSize && y >= 0 && y < gridSize) {
        clearingCoords.push([x, y]);
      }
    };

    clear(x, y);

    while (clearingCoords.length) {
      const [x, y] = clearingCoords.pop()!!;
      mask[y * gridSize + x] = "active";
      setActiveCount(activeCount + 1);

      if (grid[y * gridSize + x] !== 0) continue;

      clear(x + 1, y);
      clear(x - 1, y);
      clear(x, y + 1);
      clear(x, y - 1);
    }
    setMask((prev) => [...prev]);
  };

  const onRightMouseClick = (
    event: React.ChangeEvent<HTMLInputElement>,
    x: number,
    y: number
  ) => {
    event.preventDefault();
    event.stopPropagation();

    const isBomb = grid[y * gridSize + x] === -1;

    if (mask[y * gridSize + x] === "flaged") {
      mask[y * gridSize + x] = "inactive";
      setFlags(flags + 1);
      if (isBomb) {
        setDisabled(disabled - 1);
      }
      return;
    }

    if (mask[y * gridSize + x] !== "active" && flags !== 0) {
      mask[y * gridSize + x] = "flaged";

      if (isBomb) {
        setDisabled(disabled + 1);
      }

      setFlags(flags - 1);
      setMask((prev) => [...prev]);
    }
  };

  useEffect(() => {
    const countActiveBox = gridSize ** 2 - mineCount;
    if (activeCount === countActiveBox && disabled === mineCount) {
      setGameStatus("win");
    }
  }, [disabled, setGameStatus, activeCount, setActiveCount]);

  return (
    <div>
      {demension.map((_, y) => {
        return (
          <div className="board-row" key={y}>
            {demension.map((_, x) => {
              return (
                <BoardElement
                  key={x}
                  state={mask[y * gridSize + x]}
                  CountOfNeighbors={grid[y * gridSize + x]}
                  onHandelClick={
                    gameStatus === "progress"
                      ? () => onHandelClick(x, y)
                      : undefined
                  }
                  onRightMouseClick={
                    gameStatus === "progress"
                      ? (event) => onRightMouseClick(event, x, y)
                      : undefined
                  }
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
