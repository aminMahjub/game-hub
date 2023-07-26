import logo from "../assets/logo.webp";
import ColorSwitchMode from "./ColorSwitchMode";

const Navigation = () => {
  return (
    <nav className="col-span-2 py-2 px-4 flex justify-between items-center sticky top-0 z-10">
      <img src={logo} width={55} height={55} />

      <ColorSwitchMode />
    </nav>
  );
};

export default Navigation;
