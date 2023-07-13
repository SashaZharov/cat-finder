import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Board from "./Board/Board";
import EndGameModal from "./EndGameModal";

const GameRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export type GameStatus = "progress" | "lose" | "win";

const Game = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>("progress");
  return (
    <GameRoot>
      <Board gameStatus={gameStatus} setGameStatus={setGameStatus} />
      {gameStatus !== "progress" && <EndGameModal status={gameStatus} />}
    </GameRoot>
  );
};

export default Game;
