import { SiUnrealengine } from "react-icons/si";
import { BiLogoUnity } from "react-icons/bi";

/* Every item has both `alt` (for images) and `title` (tooltip) so screen readers get a name. */
const logo = (title, src) => ({ src, alt: title, title });

export const SKILL_ROWS = [
  {
    label: "LANGUAGES",
    ariaLabel: "Programming languages",
    logoTilt: "3deg",
    labelTilt: "3deg",
    direction: "right",
    invertLabel: true,
    gap: 100,
    logos: [
      logo(
        "JavaScript",
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20210407134359"
      ),
      logo(
        "C",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1280px-C_Programming_Language.svg.png"
      ),
      logo(
        "C++",
        "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
      ),
      logo(
        "C#",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/960px-Logo_C_sharp.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      ),
      logo(
        "Python",
        "https://upload.wikimedia.org/wikipedia/commons/6/6b/Python_logo_%28icon_only%29.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
      ),
      logo(
        "MySQL",
        "https://www.mysql.com/common/logos/logo-mysql-170x115.png"
      ),
      logo(
        "Lua",
        "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
      ),
      logo(
        "Git",
        "https://git-scm.com/images/logos/downloads/Git-Logo-1788C.png"
      ),
    ],
  },
  {
    label: "TECHNOLOGIES",
    ariaLabel: "Game development",
    logoTilt: "-1deg",
    labelTilt: "-1deg",
    direction: "right",
    gap: 150,
    invertLabel: true,
    logos: [
      {
        node: <SiUnrealengine />,
        title: "Unreal Engine",
        ariaLabel: "Unreal Engine",
      },
      { node: <BiLogoUnity />, title: "Unity", ariaLabel: "Unity" },
      logo(
        "React",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20220125121207"
      ),
      logo("Phaser", "https://cdn.phaser.io/images/logo/logo-download.png"),
    ],
  },
];
