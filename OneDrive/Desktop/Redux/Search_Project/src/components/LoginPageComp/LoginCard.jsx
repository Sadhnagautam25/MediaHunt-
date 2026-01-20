import AuthLeft from "./AuthLeft";
import AuthForm from "./AuthForm";
import { useSelector } from "react-redux";

const LoginCard = () => {
  const currtheme = useSelector((state) => state.theme.currentTheme);
  return (
    <div
      className={`w-[85%] h-[85%] rounded-[2.5rem]
     ${currtheme === "light" ? " bg-linear-to-br from-[#9bb1ff] to-[#7a8cff]" : " bg-linear-to-br from-[#415a77] to-[#7a8cff]"}
    shadow-2xl flex overflow-hidden`}
    >
      <AuthLeft />
      <AuthForm />
    </div>
  );
};

export default LoginCard;
