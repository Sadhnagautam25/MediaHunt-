import { createSlice } from "@reduxjs/toolkit";

const profileData = JSON.parse(localStorage.getItem("profiles")) || {};
export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profiles: profileData,
    currentProfile: null,
    isSaved: false,
  },

  reducers: {
    loadProfile: (state, action) => {
      const username = action.payload;

      if (!username) {
        state.currentProfile = null;
        state.isSaved = false;
        return;
      }

      const key = username.trim().toLowerCase();
      state.currentProfile = state.profiles[key] || null;
      state.isSaved = !!state.currentProfile;
    },
    profileSubmit: (state, action) => {
      const { username } = action.payload;

      if (!username) return;

      const newUser = username.toLowerCase();

      state.profiles[newUser] = action.payload;
      state.currentProfile = action.payload;
      state.isSaved = true;

      localStorage.setItem("profiles", JSON.stringify(state.profiles));
    },

    formReset: (state) => {
      state.currentProfile = null;
      state.isSaved = false;
    },

    updateProfile: (state, action) => {
      const { username } = action.payload;

      if (!username) return;

      const updateUser = username.trim().toLowerCase();

      state.profiles[updateUser] = action.payload;
      state.currentProfile = action.payload;
      state.isSaved = true;

      localStorage.setItem("profiles", JSON.stringify(state.profiles));
    },
  },
});

export const { loadProfile, profileSubmit, formReset, updateProfile } =
  profileSlice.actions;
export default profileSlice.reducer;
