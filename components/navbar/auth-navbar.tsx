import { ModeToggle } from "../theme/mode-toggle";
import Logo from "./logo/logo";

const AuthNavbar = () => {
  return (
    // dark:bg-[#0b0c21]
    // bg-[#b4b7b9]
    <nav className="flex items-center px-3 py-2 bg-navbar">
      <div className="w-full flex justify-center md:justify-start">
        <Logo />
      </div>
      <ModeToggle />
    </nav>
  );
};

export { AuthNavbar };
