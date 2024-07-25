import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaSnapchatGhost,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

const AUTH_ICON_SIZE = 20;
const icons = [
  {
    icon: <FcGoogle size={AUTH_ICON_SIZE} />,
    name: "Google",
    buttonClassName: "bg-slate-100 hover:bg-slate-300 w-full",
    textClassName: "ml-3 text-black",
  },
  {
    icon: <FaFacebook color="white" size={AUTH_ICON_SIZE} />,
    name: "Facebook",
    buttonClassName: "bg-blue-600 hover:bg-blue-800 w-full",
    textClassName: "ml-3 text-white",
  },
];
{
  /* <FaGithub key="github" size={AUTH_ICON_SIZE} />,
  <FaFacebook key="facebook" size={AUTH_ICON_SIZE} />,
  <FcGoogle key="google" size={AUTH_ICON_SIZE} />,
  <FaLinkedin key="linkdin" size={AUTH_ICON_SIZE} />,
  <FaSnapchatGhost key="snapchat" size={AUTH_ICON_SIZE} />, */
}

const ThirdPartyAuth = () => {
  const iconSize = 20; // px
  return (
    <div className="mt-3 w-full flex justify-center items-center gap-3 flex-wrap lg:flex-nowrap">
      {icons.map((icon) => (
        <Button key={icon.name} className={icon.buttonClassName}>
          <>{icon.icon}</>
          <span className={icon.textClassName}>{icon.name}</span>
        </Button>
      ))}
    </div>
  );
};

export { ThirdPartyAuth };
