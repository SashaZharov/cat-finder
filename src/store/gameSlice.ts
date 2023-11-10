import { createSlice } from "@reduxjs/toolkit";
import { GameStatusType } from "../pages/Game";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    gameSatatus: "progress" as GameStatusType,
    gridSize: 10,
    mineCount: 10,
    grid: [],
  },
  reducers: {
    setGrid(state, action) {
      console.log(action);
      state.grid = action.payload.grid;
    },
    setGameStatus(state, action) {
      console.log(action);
      state.gameSatatus = action.payload.gameStatus;
    },
  },
});

export const { setGrid, setGameStatus } = gameSlice.actions;

export default gameSlice.reducer;
