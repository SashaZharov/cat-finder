import React, { useEffect } from "react";
import styled from "styled-components";
import Board from "./Board/Board";

const GameRoot = styled.div``;

const Game = () => {
  return (
    <GameRoot>
      <Board />
    </GameRoot>
  );
};

export default Game;
