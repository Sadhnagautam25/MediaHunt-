import { createSlice } from "@reduxjs/toolkit";

export const asidebarSlice = createSlice({
  name: "asideBar",
  initialState: {
    open: false,
  },

  reducers: {
    setOpen: (state) => {
      state.open = !state.open;
    },
    setClose: (state) => {
      state.open = false;
    },
  },
});

export const { setOpen, setClose } = asidebarSlice.actions;
export default asidebarSlice.reducer;
