import { configureStore } from "@reduxjs/toolkit";

import UseDataReducers from "./DataSlider";

export default configureStore({
  reducer: {
    Data: UseDataReducers,
    Location : UseDataReducers
  },
});
