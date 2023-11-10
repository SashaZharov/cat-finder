import React, { useRef } from "react";
import "./EndGameModal.css";
import { GameStatusType } from "../../pages/Game";
import { useAppDispatch } from "../../hooks";
import { setGrid, setGameStatus } from "../../store/gameSlice";

type EndGameProps = {
  status: GameStatusType;
};

const EndGameModal: React.FC<EndGameProps> = ({ status }) => {
  const dispatch = useAppDispatch();

  const $modal = useRef(null);

  const Restart = () => {};

  return (
    <>
      <div className="mask" />
      <div className="modal-root" ref={$modal}>
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
          onClick={() => Restart()}
        >
          Начать заново
        </button>
      </div>
    </>
  );
};

export default EndGameModal;
