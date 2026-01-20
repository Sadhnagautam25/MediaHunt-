import {
  FaGoogle,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const socialIcons = [
  { icon: <FaGoogle />, color: "hover:bg-red-500" },
  { icon: <FaFacebookF />, color: "hover:bg-blue-600" },
  { icon: <FaInstagram />, color: "hover:bg-pink-500" },
  { icon: <FaTwitter />, color: "hover:bg-sky-500" },
  { icon: <FaLinkedinIn />, color: "hover:bg-blue-700" },
];

const SocialLogin = () => {
  return (
    <>
      <div className="my-6 flex items-center gap-3">
        <span className="h-px w-full bg-gray-200" />
        <span className="text-xs text-gray-400">OR</span>
        <span className="h-px w-full bg-gray-200" />
      </div>

      <p className="mb-3 text-xs text-center text-gray-500">
        Continue with
      </p>

      <div className="flex justify-center gap-3">
        {socialIcons.map((item, i) => (
          <button
            key={i}
            className={`h-11 w-11 flex items-center justify-center
            rounded-full border border-gray-200 text-gray-600
            transition-all duration-300
            hover:text-white hover:scale-110 ${item.color}`}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </>
  );
};

export default SocialLogin;
