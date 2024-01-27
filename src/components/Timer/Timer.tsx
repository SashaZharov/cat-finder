import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setGameStatus } from "../../store/gameSlice";

const Timer: React.FC<{
  minutes?: number;
  seconds?: number;
}> = ({ minutes = 0, seconds = 0 }) => {
  const dispatch = useAppDispatch();
  const [[m, s], setTime] = useState([minutes, seconds]);
  const [over, setOver] = useState(false);
  const gameStatus = useAppSelector((state) => state.game.gameSatatus);

  const tick = () => {
    if (over) return;

    if (m === 0 && s === 0) {
      setOver(true);
      dispatch(setGameStatus({ gameStatus: "lose" }));
    } else if (s === 0) {
      setTime([m - 1, 59]);
    } else {
      setTime([m, s - 1]);
    }
  };

  const reset = useCallback(() => {
    setTime([minutes, seconds]);
    setOver(false);
  }, [minutes, seconds]);

  useEffect(() => {
    const timerId = setTimeout(() => tick(), 1000);
    return () => clearTimeout(timerId);
  });

  useEffect(() => {
    if (gameStatus === "progress") {
      reset();
    } else {
      setOver(true);
    }
  }, [gameStatus, reset]);

  return (
    <div className="">
      <div>
        {m.toString().padStart(2, "0")}:{s.toString().padStart(2, "0")}
      </div>
      <div></div>
    </div>
  );
};

export default Timer;
