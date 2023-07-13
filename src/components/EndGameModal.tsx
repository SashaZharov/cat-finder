import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { GameStatus } from "./Game";

const ModalRoot = styled.div`
  position: absolute;
  height: 200px;
  width: 500px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  height: 52px;
  &:active {
    opacity: 0.5;
  }
`;

const Text = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
`;

type EndGameProps = {
  status: GameStatus;
};

const EndGameModal: React.FC<EndGameProps> = ({ status }) => {
  const $modal = useRef(null);

  return (
    <>
      <Mask />
      <ModalRoot ref={$modal}>
        <Text>{status === "lose" ? "Ты проиграл" : "Ты выйграл"}</Text>
        <Button>Начать заново</Button>
      </ModalRoot>
    </>
  );
};

export default EndGameModal;
