import React from "react";
import "./Game.css";
import Board from "../../components/Board";
import EndGameModal from "../../modal/EndGameModal";
import InfoCell from "../../components/InfoCell";
import { useAppSelector } from "../../hooks";

const Game = () => {
  const gameStatus = useAppSelector((state) => state.game.gameSatatus);

  return (
    <div className="background">
      <div className="game-root">
        <InfoCell />
        <Board />
        {gameStatus !== "progress" && <EndGameModal status={gameStatus} />}
      </div>
    </div>
  );
};

export default Game;
