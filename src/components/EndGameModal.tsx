import React, { useEffect, useRef } from "react";
import "./EndGameModal.css";
import { GameStatus } from "./Game";

type EndGameProps = {
  status: GameStatus;
};

const EndGameModal: React.FC<EndGameProps> = ({ status }) => {
  const $modal = useRef(null);

  return (
    <>
      <div className="mask" />
      <div className="modalRoot" ref={$modal}>
        <div className="text">
          {status === "lose" ? "Ты проиграл" : "Ты выйграл"}
        </div>
        <button className="main-button">Начать заново</button>
      </div>
    </>
  );
};

export default EndGameModal;
