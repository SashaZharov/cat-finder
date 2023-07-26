import React, { useEffect, useState } from "react";
import "./Game.css";
import Board from "./Board/Board";
import EndGameModal from "./EndGameModal";
import InfoCell from "./InfoCell";

export type GameStatus = "progress" | "lose" | "win";

const Game = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>("progress");
  return (
    <div className="background">
      <div className="gameRoot">
        <InfoCell timer={0} flags={10} />
        <Board gameStatus={gameStatus} setGameStatus={setGameStatus} />
        {gameStatus !== "progress" && <EndGameModal status={gameStatus} />}
      </div>
    </div>
  );
};

export default Game;
