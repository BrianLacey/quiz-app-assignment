import { createSlice, current } from "@reduxjs/toolkit";
import { ISelected } from "../models";

const initialState: ISelected[] = [];

const selectedSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    updateSelected: (state, action) => {
      const { payload } = action;
      const curState = current(state);
      const nextIndex = curState.findIndex((item) =>
        item.question === payload.question
      );
      if (nextIndex === -1) {
        return curState.concat([payload]);
      } else {
        return curState.map((item, index) => {
          if (index === nextIndex) {
            return payload;
          } else {
            return item;
          }
        })
      }
    },
    resetSelected: (state) => [],
  },
});

export const { updateSelected, resetSelected } = selectedSlice.actions;
export default selectedSlice.reducer;
