import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const nameSlider = createSlice({
  name: "Data",
  initialState,
  reducers: {
    getName: (state, action) => {
      state.value = action.payload;
    },
  },
});
const LocationSlider = createSlice({
  name: "Location",
  initialState,
  reducers: {
    getLocation: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getName } = nameSlider.actions;
export const { getLocation } = LocationSlider.actions;
export default (LocationSlider,nameSlider).reducer;

