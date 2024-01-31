import React from "react";
import "./Game.css";
import Board from "../../components/Board";
import EndGameModal from "../../modal/EndGameModal";
import InfoCell from "../../components/InfoCell";

const Game = () => {
  return (
    <div className="background">
      <div className="game-root">
        <InfoCell />
        <Board />
        <EndGameModal />
      </div>
    </div>
  );
};

export default Game;
