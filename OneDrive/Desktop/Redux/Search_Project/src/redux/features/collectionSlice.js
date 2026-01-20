import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("collections")) || [],
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const alreadyExist = state.items.find((item) => {
        item.id === action.payload.id;
      });

      if (!alreadyExist) {
        state.items.push(action.payload);
        localStorage.setItem("collections", JSON.stringify(state.items));
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("collections", JSON.stringify(state.items));
    },

    clearCollection: (state) => {
      ((state.items = []), localStorage.removeItem("collections"));
    },
  },
});

export const { addCollection, removeItem, clearCollection } =
  collectionSlice.actions;
export default collectionSlice.reducer;
