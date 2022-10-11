import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  project: null,
  showDetails: false,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    hideDetails(state) {
      state.showDetails = false;
      state.project = null;
    },
    showDetails(state, action) {
      state.showDetails = true;
      state.project = action.payload;
    },
  },
});

export const { hideDetails, showDetails } = projectsSlice.actions;

export const projectsReducer = projectsSlice.reducer;
