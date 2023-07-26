import { AiFillWindows, AiFillApple, AiFillChrome } from "react-icons/ai";
import { FaPlaystation, FaLinux } from "react-icons/fa";
import { BsXbox, BsNintendoSwitch, BsDatabaseFillGear } from "react-icons/bs";
import { DiAndroid, DiAppstore } from 'react-icons/di';

const platformIcons = {
  pc: <AiFillWindows />,
  playstation: <FaPlaystation />,
  xbox: <BsXbox />,
  nintendo: <BsNintendoSwitch />,
  mac: <AiFillApple />,
  linux: <FaLinux />,
  ios: <DiAppstore />, 
  android: <DiAndroid />,
  web: <AiFillChrome />
};

export type PlatformsSlugType = keyof typeof platformIcons;

export default platformIcons;
