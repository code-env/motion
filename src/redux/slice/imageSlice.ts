import { createSlice } from "@reduxjs/toolkit";

type imageState = {
  src: File | null;
};

const initialState: imageState = {
  src: null,
};
const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    changeImageProps: (state, action) => {
      state.src = action.payload;
    },
  },
});

export const { changeImageProps } = imageSlice.actions;

export default imageSlice.reducer;
