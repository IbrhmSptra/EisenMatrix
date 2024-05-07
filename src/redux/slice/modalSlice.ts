import { createSlice } from "@reduxjs/toolkit";

type modal = {
  info: boolean;
  note: boolean;
};

const initialState: modal = {
  info: false,
  note: false,
};

const modal = createSlice({
  name: "modalState",
  initialState,
  reducers: {
    toggleInfo: (state) => {
      state.info = !state.info;
    },
    toggleNote: (state) => {
      state.note = !state.note;
    },
    closeNote: (state) => {
      state.note = false;
    },
    closeInfo: (state) => {
      state.info = false;
    },
  },
});

export const { toggleInfo, toggleNote, closeNote, closeInfo } = modal.actions;
export default modal.reducer;
