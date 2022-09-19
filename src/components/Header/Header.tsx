import { useState } from "react";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import PersonIcon from "@mui/icons-material/Person";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SummarizeIcon from "@mui/icons-material/Summarize";
import BatchPredictionIcon from "@mui/icons-material/BatchPrediction";
import CoffeeIcon from "@mui/icons-material/Coffee";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
// import VisibilityIcon from "@mui/icons-material/Visibility";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MenuScreen, { MenuItemType } from "../MenuScreen";
import Texts from "../../texts";
import { LINKEDIN } from "../../constants";
import { MenuScreenType } from "../MenuScreen/MenuScreen";

const menuList: MenuItemType[] = [
  {
    icon: <PersonIcon />,
    text: "About Me",
    link: "/home#self-intro",
  },
  {
    icon: <DesignServicesIcon />,
    text: "My work",
    link: "/home#work",
  },
  {
    icon: <BatchPredictionIcon />,
    text: "Blog",
    link: "/home#blog",
  },
  {
    icon: <WorkspacesIcon />,
    text: "Projects",
    link: "/home#projects",
    subMenuItems: [
      {
        ...Texts.OH,
        icon: <DeveloperBoardIcon />,
      },
      // {
      //   ...Texts.ITS,
      //   icon: <VisibilityIcon />,
      // },
      {
        title: "Others",
        pageUrl: "/home#projects",
        icon: <MoreHorizIcon />,
      },
    ],
  },
  {
    icon: <CoffeeIcon />,
    text: "Connect",
    link: "/home#connect",
    subMenuItems: [
      {
        icon: <SummarizeIcon />,
        title: "Resume",
        pageUrl:
          "https://drive.google.com/open?id=0B1dSWHM51dn-RGJBNlJZNFdaNW8",
        external: true,
      },
      {
        icon: <LinkedInIcon />,
        title: "LinkedIn",
        pageUrl: LINKEDIN,
        external: true,
      },
      {
        icon: <GitHubIcon />,
        title: "GitHub",
        pageUrl: "https://github.com/tic30",
        external: true,
      },
    ],
  },
];

const Header: React.FC<Pick<MenuScreenType, "scrollAreaRef">> = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MenuScreen
      open={menuOpen}
      setOpen={() => setMenuOpen((open) => !open)}
      menuList={menuList}
      {...props}
    />
  );
};

export default Header;
