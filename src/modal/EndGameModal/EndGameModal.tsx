import React from "react";
import "./EndGameModal.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setGameStatus } from "../../store/gameSlice";

const EndGameModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const gameStatus = useAppSelector((state) => state.game.gameSatatus);

  const RestartGame = () => {
    dispatch(setGameStatus({ gameStatus: "progress" }));
  };

  return (
    <>
      {gameStatus !== "progress" && <div className="mask" />}
      <div className={`modal-root ${gameStatus !== "progress" ? "" : "hide"}`}>
        <div className="styled-text">
          {gameStatus === "lose" ? (
            <div className="red-text">Поражение</div>
          ) : (
            <div className="green-text">Победа</div>
          )}
        </div>
        <button
          className={`main-button ${
            gameStatus === "lose" ? "red-background" : "green-background"
          }`}
          onClick={() => RestartGame()}
        >
          Начать заново
        </button>
      </div>
    </>
  );
};

export default EndGameModal;
