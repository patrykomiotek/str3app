import { Button } from "../../ui";
import { useThemeContext } from "./ThemeContext";

export const ThemeSwitcher = () => {
  const context = useThemeContext();
  const handleClick = () => {
    context.toggle();
  };

  console.log(context.theme);

  return <Button label="Switch theme" onClick={handleClick} />;
};
