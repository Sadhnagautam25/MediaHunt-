import { createSlice } from "@reduxjs/toolkit";

const getLoggedInUser = () => {
  const user = localStorage.getItem("LoggedInUser");
  return user ? JSON.parse(user) : null;
};

const LoggedUser = getLoggedInUser();

const initialState = {
  user: LoggedUser?.username || null,
  email: LoggedUser?.email || null,
  password: LoggedUser?.password || null,
  isLoggedIn: !!LoggedUser,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isLoggedIn: (state, action) => {
      const { username, email, password } = action.payload;

      const userData = {
        username: username.toLowerCase(),
        email,
        password,
      };

      state.user = userData.username;
      state.email = userData.email;
      state.password = userData.password;
      state.isLoggedIn = true;

      localStorage.setItem("LoggedInUser", JSON.stringify(userData));
    },

    isLoggedOut: (state) => {
      state.user = null;
      state.email = null;
      state.password = null;
      state.isLoggedIn = false;

      localStorage.removeItem("LoggedInUser");
    },
  },
});


export const {isLoggedIn, isLoggedOut} = authSlice.actions;
export default authSlice.reducer;