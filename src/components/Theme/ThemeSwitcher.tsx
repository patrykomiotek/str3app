import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { getMode, useThemeContext, Theme } from "./ThemeContext";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<Theme | null>(getMode());
  const context = useThemeContext();
  const handleClick = () => {
    context.toggle();
    setTheme((theme) => (theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  const icon = theme === Theme.LIGHT ? faMoon : faSun;

  return (
    <div className="ml-4 w-[40px]">
      <FontAwesomeIcon
        icon={icon}
        onClick={handleClick}
        className="cursor-pointer"
      />
    </div>
  );
};
