import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaSnapchatGhost,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const AUTH_ICON_SIZE = 20;
const icons = [
  <FaGithub key="github" size={AUTH_ICON_SIZE} />,
  <FaFacebook key="facebook" size={AUTH_ICON_SIZE} />,
  <FcGoogle key="google" size={AUTH_ICON_SIZE} />,
  <FaLinkedin key="linkdin" size={AUTH_ICON_SIZE} />,
  <FaSnapchatGhost key="snapchat" size={AUTH_ICON_SIZE} />,
];

const AuthLogo = ({ children }: { children: any }) => {
  return (
    <div className="rounded-full p-2 cursor-pointer hover:dark:bg-gray-700">
      {children}
    </div>
  );
};

const ThirdPartyAuth = () => {
  const iconSize = 20; // px
  return (
    <div className="w-full flex justify-center items-center flex-wrap gap-3 ">
      {icons.map((icon) => (
        <AuthLogo key={icon.key}>
          <>{icon}</>
        </AuthLogo>
      ))}
    </div>
  );
};

export { ThirdPartyAuth };
