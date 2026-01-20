import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import CollectionPage from "./pages/CollectionPage";
import { ToastContainer } from "react-toastify";
import { loadProfile } from "./redux/features/profileSlice";

const App = () => {
  const isLoggedInUser = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.auth.user);
  const currtheme = useSelector((state) => state.theme.currentTheme);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProfile(username));
  }, [dispatch, username]);

  return (
    <div
      className={`w-full h-screen ${currtheme === "light" ? "bg-white text-black" : "bg-[#0d1b2a] text-white"} `}
    >
      <Routes>
        <Route
          path="/"
          element={
            !isLoggedInUser ? <LoginPage /> : <Navigate to={"/dashboard"} />
          }
        />

        <Route
          path="/dashboard"
          element={isLoggedInUser ? <HomePage /> : <Navigate to={"/"} />}
        />

        <Route
          path="/profile"
          element={isLoggedInUser ? <ProfilePage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/collection"
          element={isLoggedInUser ? <CollectionPage /> : <Navigate to={"/"} />}
        />
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
