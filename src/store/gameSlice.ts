import { createSlice } from "@reduxjs/toolkit";
import { GameStatusType } from "../pages/Game";
import { MaskState } from "../components/Board";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    gameSatatus: "progress" as GameStatusType,
    gridSize: 10,
    mineCount: 5,
    flags: 5,
    grid: [],
    mask: [] as MaskState[],
  },
  reducers: {
    setGrid(state, action) {
      state.grid = action.payload.grid;
    },

    setGameStatus(state, action) {
      state.gameSatatus = action.payload.gameStatus;
    },
    setFlags(state, action) {
      state.flags = action.payload.flags;
    },
  },
});

export const { setGrid, setGameStatus, setFlags } = gameSlice.actions;

export default gameSlice.reducer;
