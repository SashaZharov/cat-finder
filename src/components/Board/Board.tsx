import React, { useCallback, useEffect, useState } from "react";
import "./Board.css";
import { CreateGrid } from "../../utils";
import BoardElement from "../BoardElement";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { MaskState } from ".";
import { setGrid, setGameStatus, setFlags } from "../../store/gameSlice";

const Board: React.FC = () => {
  const dispatch = useAppDispatch();

  const grid = useAppSelector((state) => state.game.grid);
  const gridSize = useAppSelector((state) => state.game.gridSize);
  const mineCount = useAppSelector((state) => state.game.mineCount);
  const gameStatus = useAppSelector((state) => state.game.gameSatatus);
  const flags = useAppSelector((state) => state.game.flags);

  const [disabled, setDisabled] = useState(0);
  const [activeCount, setActiveCount] = useState(0);
  const [mask, setMask] = useState<MaskState[]>(() =>
    new Array(gridSize * gridSize).fill("inactive")
  );
  const demension = new Array(gridSize).fill(0);

  const clear = useCallback(
    (x: number, y: number, clearingCoords: [number, number][]) => {
      if (mask[y * gridSize + x] === "active") return;
      if (mask[y * gridSize + x] === "flaged") return;

      if (x >= 0 && x < gridSize && y >= 0 && y < gridSize) {
        clearingCoords.push([x, y]);
      }
    },
    [gridSize, mask]
  );

  const onHandelClick = (x: number, y: number) => {
    if (mask[y * gridSize + x] === "flaged") return;

    // Сheck lose
    if (grid[y * gridSize + x] === -1) {
      const newMask = new Array(gridSize * gridSize).fill("active");
      setMask(newMask);
      dispatch(setFlags({ flags: mineCount }));
      dispatch(setGameStatus({ gameStatus: "lose" }));
    }

    // Сlearing game map
    const clearingCoords: [number, number][] = [];

    clear(x, y, clearingCoords);

    while (clearingCoords.length) {
      const [x, y] = clearingCoords.pop()!!;
      mask[y * gridSize + x] = "active";

      if (grid[y * gridSize + x] !== 0) continue;

      clear(x + 1, y, clearingCoords);
      clear(x - 1, y, clearingCoords);
      clear(x, y + 1, clearingCoords);
      clear(x, y - 1, clearingCoords);
    }

    let countActiveFields = 0;
    for (let i = mask.length; i >= 0; i--) {
      if (mask[i] === "active") countActiveFields += 1;
    }

    setActiveCount(countActiveFields);
    setMask((prev) => [...prev]);
  };

  const onRightMouseClick = (
    event: React.ChangeEvent<HTMLInputElement>,
    x: number,
    y: number
  ) => {
    event.preventDefault();
    event.stopPropagation();

    const targetField = y * gridSize + x;
    const isBomb = grid[targetField] === -1;

    if (mask[targetField] === "flaged") {
      mask[targetField] = "inactive";
      dispatch(setFlags({ flags: flags + 1 }));
      if (isBomb) {
        setDisabled(disabled - 1);
      }
      return;
    }

    if (mask[targetField] !== "active" && flags !== 0) {
      mask[targetField] = "flaged";

      if (isBomb) {
        setDisabled(disabled + 1);
      }

      dispatch(setFlags({ flags: flags - 1 }));
      setMask((prev) => [...prev]);
    }
  };

  useEffect(() => {
    const countActiveBox = gridSize ** 2 - mineCount;

    if (activeCount === countActiveBox && disabled === mineCount) {
      dispatch(setGameStatus({ gameStatus: "win" }));
      const newMask = new Array(gridSize * gridSize).fill("active");
      setMask(newMask);
      dispatch(setFlags({ flags: mineCount }));
    }
  }, [disabled, activeCount, gridSize, mineCount, dispatch]);

  useEffect(() => {
    if (gameStatus === "progress") {
      let newMask = new Array(gridSize * gridSize).fill("inactive");
      setMask(newMask);
      dispatch(setFlags({ flags: mineCount }));
      setDisabled(0);
      setActiveCount(0);

      const newGrid = CreateGrid(gridSize, mineCount);
      dispatch(setGrid({ grid: newGrid }));
    }
  }, [dispatch, gridSize, mineCount, gameStatus]);

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
                  CountOfNeighbors={grid && grid[y * gridSize + x]}
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
