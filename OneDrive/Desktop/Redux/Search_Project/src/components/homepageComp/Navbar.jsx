import { Link, useNavigate } from "react-router-dom";
import { Menu, Search, Undo2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setClose, setOpen } from "../../redux/features/asidebarSlice";
import { useState } from "react";
import { setQuery } from "../../redux/features/searchSlice";

const Navbar = () => {
  const menuBtn = useSelector((state) => state.asideBar.open);
  const dispatch = useDispatch();
  const [isQuery, setIsQuery] = useState("");

  const navigate = useNavigate();

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    if (isQuery.trim() !== "") {
      dispatch(setQuery(isQuery));
    }
    setIsQuery("");
  };

  const currProfile = useSelector((state) => state.profile.currentProfile);
  const currTheme = useSelector((state) => state.theme.currentTheme);

  return (
   <div
  className={`fixed top-0 left-0 z-50 w-full transition-shadow duration-300
  ${
    currTheme === "light"
      ? "bg-linear-to-r from-[#fdfbfb]/80 via-[#ebedee]/80 to-[#fdfbfb]/80 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.25)]"
      : "bg-linear-to-r from-[#0d1b2a] via-[#1b263b] to-[#415a77] text-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)]"
  }`}
>
  <div
    className={`flex h-16 w-full items-center justify-between
    backdrop-blur-xl px-6
    ${
      currTheme === "light"
        ? "border-b border-black/10"
        : "border-b border-white/10"
    }`}
  >
    {/* Logo */}
    <div
      className={`text-xl font-semibold ${
        currTheme === "light" ? "text-black" : "text-white"
      }`}
    >
      Media
      <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Hunt
      </span>
    </div>

    {/* Search */}
    <div className="hidden md:flex flex-1 justify-center px-8">
      <div className="relative w-full max-w-xl">
        <Search
          size={18}
          className={`absolute left-4 top-1/2 -translate-y-1/2 ${
            currTheme === "light" ? "text-black/50" : "text-white/60"
          }`}
        />
        <input
          type="text"
          value={isQuery}
          onChange={(e) => setIsQuery(e.target.value)}
          placeholder="Search images, videos, gifs..."
          className={`w-full rounded-lg py-2.5 pl-11 pr-4 text-sm outline-none transition
          ${
            currTheme === "light"
              ? "bg-white/80 text-black placeholder-black/40 shadow-md focus:ring-2 focus:ring-indigo-400"
              : "bg-white/10 text-white placeholder-white/40 shadow-lg focus:ring-2 focus:ring-indigo-500"
          }`}
        />
      </div>

      {/* Enter Button */}
      <button
        type="submit"
        onClick={handleSubmitBtn}
        className="ml-3 relative overflow-hidden rounded-lg
        bg-[#788bff]
        px-5 py-2 text-sm font-semibold text-white
        shadow-[0_8px_20px_-6px_rgba(84,101,255,0.6)]
        hover:scale-105 hover:shadow-[0_10px_28px_-6px_rgba(84,101,255,0.9)]
        active:scale-95
        transition-all duration-300"
      >
        <span className="relative z-10">Enter</span>
        <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition" />
      </button>
    </div>

    {/* Right Section */}
    <div className="flex items-center gap-5">
      <Link
        to={"/collection"}
        className={`hidden md:block text-sm font-medium transition ${
          currTheme === "light"
            ? "hover:text-indigo-600"
            : "hover:text-indigo-400"
        }`}
      >
        Collections
      </Link>

      {/* Profile */}
      {currProfile ? (
        <div
          onClick={() => navigate("/profile")}
          className="size-12 rounded-full overflow-hidden cursor-pointer
          shadow-[0_6px_18px_-6px_rgba(0,0,0,0.6)]"
        >
          <img
            src={currProfile.profileImg}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <Link
          to={"/profile"}
          className="hidden md:inline-flex items-center justify-center
          rounded-full
          bg-linear-to-r from-[#788bff] via-[#6a78ff] to-[#5465ff]
          px-5 py-2 text-sm font-semibold text-white
          shadow-[0_10px_30px_-10px_rgba(84,101,255,0.7)]
          hover:scale-105 hover:shadow-[0_14px_36px_-10px_rgba(120,139,255,0.9)]
          transition-all duration-300"
        >
          Create Account
        </Link>
      )}

      {/* Menu Button */}
      {!menuBtn ? (
        <button
          onClick={() => dispatch(setOpen())}
          className="p-2 rounded-full backdrop-blur-md
          bg-white/70
          shadow-[0_4px_12px_-4px_rgba(0,0,0,0.4)]
          hover:scale-110 transition"
        >
          <Menu size={22} className="text-black" />
        </button>
      ) : (
        <button
          onClick={() => dispatch(setClose())}
          className="p-2 rounded-full backdrop-blur-md
          bg-white/70
          shadow-[0_4px_12px_-4px_rgba(0,0,0,0.4)]
          hover:scale-110 transition"
        >
          <Undo2 size={22} className="text-black" />
        </button>
      )}
    </div>
  </div>
</div>

  );
};

export default Navbar;
