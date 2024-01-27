import { createSlice } from "@reduxjs/toolkit";
import { GameStatusType } from "../pages/Game";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    gameSatatus: "progress" as GameStatusType,
    gridSize: 10,
    mineCount: 15,
    flags: 15,
  },
  reducers: {
    setGameStatus(state, action) {
      state.gameSatatus = action.payload.gameStatus;
    },
    setFlags(state, action) {
      state.flags = action.payload.flags;
    },
  },
});

export const { setGameStatus, setFlags } = gameSlice.actions;

export default gameSlice.reducer;
