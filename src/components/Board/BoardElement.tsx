import React from "react";
import styled from "styled-components";

type BoardProps = {
  state: "active" | "unactive" | "flaged";
  neighborsNumber: number;
};

const BoardElement = ({ state, neighborsNumber }: BoardProps) => {
  return <div>{neighborsNumber}</div>;
};

export default BoardElement;
