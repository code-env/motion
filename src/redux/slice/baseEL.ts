import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  name: string;
};

const initialState: State = {
  name: "",
};

const slice = createSlice({
  name: "component",
  initialState,
  reducers: {
    changeEl: (state, action: PayloadAction<string>) => {
      const name = action.payload;
      state.name = name;
    },
  },
});

export const { changeEl } = slice.actions;

export default slice.reducer;
