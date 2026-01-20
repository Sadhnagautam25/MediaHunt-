import React from "react";
import { useSelector } from "react-redux";

const AuthLeft = () => {
  const currtheme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className="w-[40%] h-full px-10 py-12 flex flex-col justify-between">
      <div>
        {/* Heading */}
        <h1
          className={`text-4xl md:text-5xl font-bold leading-tight ${
            currtheme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Welcome to{" "}
          <span
            className={`bg-clip-text text-transparent ${
              currtheme === "dark"
                ? "bg-white"
                : "bg-linear-to-r from-[#3a4df6] to-[#4a5bcb]"
            }`}
          > 
            MediaHunt
          </span>
        </h1>

        {/* Description */}
        <p
          className={`mt-5 text-sm md:text-base leading-relaxed max-w-sm ${
            currtheme === "dark" ? "text-white/80" : "text-gray-600"
          }`}
        >
          Discover stunning photos, videos and GIFs crafted by creators around
          the world.
        </p>
      </div>

      {/* Illustration */}
      <img
        className={`w-full max-h-[65%] object-contain drop-shadow-xl ${
          currtheme === "dark" ? "opacity-100" : "opacity-95"
        }`}
        src="https://kalpco.com/img/Saly-10.svg"
        alt="Media Illustration"
      />
    </div>
  );
};

export default AuthLeft;
