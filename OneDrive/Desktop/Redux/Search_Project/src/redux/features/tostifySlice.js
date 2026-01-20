import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const initialState = {};

const toastConfig = {
  position: "top-right",
  autoClose: 1600,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
  transition: Zoom,
};

const tostifySlice = createSlice({
  name: "tostify",
  initialState,
  reducers: {
    addToast: () => {
      toast.success("Saved to collection 💾", toastConfig);
    },
    removeToast: () => {
      toast.error("Removed from collection 🗑", toastConfig);
    },
  },
});

export const { addToast, removeToast } = tostifySlice.actions;
export default tostifySlice.reducer;

