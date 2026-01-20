import { Link } from "react-router-dom";
import {
  Sun,
  Moon,
  Linkedin,
  Github,
  Instagram,
  User,
  LogOut,
  Info,
  Folder,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedOut } from "../../redux/features/authSlice";
import { setDarkMode, setLightMode } from "../../redux/features/themeSlice";

const AsideBar = () => {
  const menuBtn = useSelector((state) => state.asideBar.open);
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const handleToggleThemeBtn = () => {
    if (currentTheme === "light") {
      dispatch(setDarkMode());
    } else {
      dispatch(setLightMode());
    }
  };

  // Dynamic item style based on theme
  const getItemStyle = () =>
    `group flex items-center gap-3 rounded-md px-3 py-2 cursor-pointer text-sm font-medium
     transition-all duration-200
     ${currentTheme === "light" ? "text-gray-700 hover:text-white hover:bg-[#788bff]/90" : "text-white hover:text-gray-100 hover:bg-gray-700/30"}`;

  return (
    <div
      className={`fixed top-16 z-40 h-[calc(100vh-4rem)] w-72
  ${menuBtn ? "right-0" : "-right-72"}
  transition-all duration-300 ease-in-out

  border-l
  ${
    currentTheme === "light"
      ? "border-gray-200 bg-white/80 text-gray-900 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
      : "border-white/10 bg-black/40 text-gray-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.9)]"
  }

  backdrop-blur-2xl`}
    >
      <div className="flex h-full flex-col justify-between p-5">
        {/* Top */}
        <div className="flex flex-col gap-1">
          <Link to={"/profile"} className={getItemStyle()}>
            <User size={18} className="opacity-80 group-hover:opacity-100" />
            Go to Profile
          </Link>

          <button
            className={`${getItemStyle()} justify-between flex items-center px-3 py-2 rounded-md`}
            onClick={handleToggleThemeBtn}
          >
            <span className="flex items-center gap-3">
              <span
                className={`transform transition-all duration-500 ease-in-out ${
                  currentTheme === "light" ? "translate-x-0" : "translate-x-50"
                }`}
              >
                <Sun size={18} className="opacity-80" />
              </span>
              {currentTheme === "light" ? "Light Mode" : "Dark Mode"}
            </span>
            <span
              className={`transform transition-transform duration-500 ${
                currentTheme === "light" ? "translate-x-0" : "-translate-x-51"
              }`}
            >
              <Moon size={18} className="opacity-70" />
            </span>
          </button>

          <Link className={getItemStyle()}>
            <Info size={18} className="opacity-80" />
            About
          </Link>

          <Link to={"/collection"} className={getItemStyle()}>
            <Folder size={18} className="opacity-80" />
            Your Collection
          </Link>
        </div>

        {/* Contact */}
        <div
          className={`border-t pt-4 ${currentTheme === "light" ? "border-gray-200" : "border-gray-600"}`}
        >
          <p
            className={`mb-2 text-xs font-semibold tracking-wide ${currentTheme === "light" ? "text-gray-500" : "text-gray-400"}`}
          >
            CONTACT
          </p>

          <div className="flex flex-col gap-1">
            <a
              href="https://www.linkedin.com/in/sadhnagautam25"
              target="_blank"
              className={getItemStyle()}
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a
              href="https://github.com/Sadhnagautam25"
              target="_blank"
              className={getItemStyle()}
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://www.instagram.com/codewithsadhna"
              target="_blank"
              className={getItemStyle()}
            >
              <Instagram size={18} />
              Instagram
            </a>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={() => dispatch(isLoggedOut())}
          className={`mt-4 flex items-center justify-center gap-2
            rounded-md border px-3 py-2 text-sm font-semibold
            transition-all duration-200 cursor-pointer active:scale-95
            ${
              currentTheme === "light"
                ? "border-[#5465ff]/40 bg-white text-[#5465ff] hover:bg-[#5465ff] hover:text-white"
                : "border-[#788bff]/40 bg-gray-800 text-white hover:bg-[#5465ff] hover:text-white"
            }`}
        >
          <LogOut size={18} />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default AsideBar;
