import { createSlice } from "@reduxjs/toolkit";

type imageState = {
  src: string;
};

const initialState: imageState = {
  src: "",
};
const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    changeImageProps: (action, payload) => {},
  },
});

export const { changeImageProps } = imageSlice.actions;

export default imageSlice.reducer;
