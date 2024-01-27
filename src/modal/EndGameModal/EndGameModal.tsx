import React from "react";
import "./EndGameModal.css";
import { GameStatusType } from "../../pages/Game";
import { useAppDispatch } from "../../hooks";
import { setGameStatus } from "../../store/gameSlice";

type EndGameProps = {
  status: GameStatusType;
};

const EndGameModal: React.FC<EndGameProps> = ({ status }) => {
  const dispatch = useAppDispatch();

  const RestartGame = () => {
    dispatch(setGameStatus({ gameStatus: "progress" }));
  };

  return (
    <>
      <div className="mask" />
      <div className="modal-root">
        <div className="styled-text">
          {status === "lose" ? (
            <div className="red-text">Поражение</div>
          ) : (
            <div className="green-text">Победа</div>
          )}
        </div>
        <button
          className={`main-button ${
            status === "lose" ? "red-background" : "green-background"
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
