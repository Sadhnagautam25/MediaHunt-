import { useSelector } from "react-redux";
import LoginCard from "../components/LoginPageComp/LoginCard";


const LoginPage = () => {

  const currtheme = useSelector((state)=>state.theme.currentTheme);
  return (
    <div className={`w-full h-screen flex items-center justify-center ${currtheme === 'light'? ('bg-gray-100'):('bg-gray-50/10')}`}>
      <LoginCard />
    </div>
  );
};

export default LoginPage;

