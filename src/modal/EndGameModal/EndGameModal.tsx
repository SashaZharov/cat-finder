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
          {status === "lose" ? "Ты проиграл" : "Ты выйграл"}
        </div>
        <button className="main-button">Начать заново</button>
      </div>
    </>
  );
};

export default EndGameModal;
