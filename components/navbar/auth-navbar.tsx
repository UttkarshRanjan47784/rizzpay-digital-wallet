import { ModeToggle } from "../theme/mode-toggle";
import Logo from "./logo/logo";

const AuthNavbar = () => {
  return (
    // dark:bg-[#0b0c21]
    <nav className="flex items-center px-3 py-2 bg-[#f1f3f5]  dark:bg-navbar shadow-xl ">
      <div className="w-full flex justify-center md:justify-start">
        <Logo />
      </div>
      <ModeToggle />
    </nav>
  );
};

export { AuthNavbar };
