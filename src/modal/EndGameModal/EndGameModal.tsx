import React, { useRef } from "react";
import "./EndGameModal.css";
import { GameStatusType } from "../../pages/Game";

type EndGameProps = {
  status: GameStatusType;
};

const EndGameModal: React.FC<EndGameProps> = ({ status }) => {
  const $modal = useRef(null);

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
        >
          Начать заново
        </button>
      </div>
    </>
  );
};

export default EndGameModal;
