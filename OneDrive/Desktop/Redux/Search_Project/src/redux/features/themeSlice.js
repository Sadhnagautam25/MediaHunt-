import { createSlice } from "@reduxjs/toolkit";

// Get saved theme from localStorage if exists
const savedTheme = localStorage.getItem("theme")
  ? JSON.parse(localStorage.getItem("theme"))
  : "light";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: savedTheme, // 'light' or 'dark'
  },
  reducers: {
    setLightMode: (state) => {
      state.currentTheme = "light";
      localStorage.setItem("theme", JSON.stringify("light"));
    },
    setDarkMode: (state) => {
      state.currentTheme = "dark";
      localStorage.setItem("theme", JSON.stringify("dark"));
    },
  },
});

export const { setLightMode, setDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
