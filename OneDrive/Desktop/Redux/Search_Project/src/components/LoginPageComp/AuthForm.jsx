import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SocialLogin from "./SocialLogin";
import { isLoggedIn } from "../../redux/features/authSlice";
import { loadProfile } from "../../redux/features/profileSlice";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const dispatch = useDispatch();
  const currtheme = useSelector((state) => state.theme.currentTheme);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(isLoggedIn({ username, email, password }));
    dispatch(loadProfile(username));

    setUsername("");
    setEmail("");
    setPasword("");
  };

  return (
    <div
      className={`w-[60%] h-full flex items-center justify-center transition-colors duration-300 ${
        currtheme === "dark"
          ? "bg-black/60 text-gray-100"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="w-105">
        {/* Heading */}
        <h2
          className={`text-3xl font-semibold ${
            currtheme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Login Account
        </h2>

        <p
          className={`mt-2 text-sm ${
            currtheme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Join MediaHunt and explore unlimited creativity
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Full Name"
            className={`w-full rounded-xl px-4 py-3 text-sm outline-none transition
            ${
              currtheme === "dark"
                ? "bg-white/10 border border-white/10 text-white placeholder-white/40 focus:ring-2 focus:ring-indigo-500"
                : "bg-white border border-gray-300 text-black placeholder-gray-400 focus:ring-2 focus:ring-[#5465ff]"
            }`}
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className={`w-full rounded-xl px-4 py-3 text-sm outline-none transition
            ${
              currtheme === "dark"
                ? "bg-white/10 border border-white/10 text-white placeholder-white/40 focus:ring-2 focus:ring-indigo-500"
                : "bg-white border border-gray-300 text-black placeholder-gray-400 focus:ring-2 focus:ring-[#5465ff]"
            }`}
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPasword(e.target.value)}
            placeholder="Password"
            className={`w-full rounded-xl px-4 py-3 text-sm outline-none transition
            ${
              currtheme === "dark"
                ? "bg-white/10 border border-white/10 text-white placeholder-white/40 focus:ring-2 focus:ring-indigo-500"
                : "bg-white border border-gray-300 text-black placeholder-gray-400 focus:ring-2 focus:ring-[#5465ff]"
            }`}
          />

          {/* Button */}
          <button
            type="submit"
            className={`w-full rounded-xl py-3 text-sm font-semibold text-white
            transition-all hover:scale-[1.03]
            ${
              currtheme === "dark"
                ? "bg-linear-to-r from-[#6f7dff] to-[#8ea2ff] shadow-[0_10px_30px_-10px_rgba(120,140,255,0.8)]"
                : "bg-linear-to-r from-[#5465ff] to-[#788bff] shadow-md"
            }`}
          >
            Login Account
          </button>
        </form>

        {/* Social login */}
        <SocialLogin />

        {/* Footer */}
        <p
          className={`mt-6 text-xs text-center ${
            currtheme === "dark" ? "text-gray-400" : "text-gray-400"
          }`}
        >
          Already have an account?{" "}
          <span
            className={`font-medium cursor-pointer ${
              currtheme === "dark"
                ? "text-indigo-400 hover:text-indigo-300"
                : "text-[#5465ff] hover:text-[#788bff]"
            }`}
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;

