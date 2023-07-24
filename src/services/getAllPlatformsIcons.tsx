import { AiFillWindows, AiFillApple } from "react-icons/ai";
import { FaPlaystation, FaLinux } from "react-icons/fa";
import { BsXbox, BsNintendoSwitch, BsDatabaseFillGear } from "react-icons/bs";
import { DiAndroid, DiAppstore } from 'react-icons/di';
import { Platforms } from "../hooks/useGame";

const platformIcons = {
  pc: <AiFillWindows />,
  playstation: <FaPlaystation />,
  xbox: <BsXbox />,
  nintendo: <BsNintendoSwitch />,
  mac: <AiFillApple />,
  linux: <FaLinux />,
  ios: <DiAppstore />, 
  android: <DiAndroid />,
};

export type PlatformsSlugType = keyof typeof platformIcons;

export default platformIcons;
