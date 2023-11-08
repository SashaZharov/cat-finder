import React, { useState } from "react";
import "./Game.css";
import Board from "../../components/Board";
import EndGameModal from "../../modal/EndGameModal";
import InfoCell from "../../components/InfoCell";
import { GameStatusType } from ".";

const Game = () => {
  const [gameStatus, setGameStatus] = useState<GameStatusType>("progress");

  return (
    <div className="background">
      <div className="game-root">
        <InfoCell timer={0} flags={10} />
        <Board gameStatus={gameStatus} setGameStatus={setGameStatus} />
        {gameStatus !== "progress" && <EndGameModal status={gameStatus} />}
      </div>
    </div>
  );
};

export default Game;
