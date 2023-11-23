import { createContext, useContext, useRef, useState } from "react";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

type ThemeContextType = {
  theme: Theme;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context) {
    return context;
  }
  throw new Error("Oh no! Component should be placed inside ThemeProvider");
};

const useTheme = () => {
  // const [theme, setTheme] = useState<Theme>(Theme.DARK);
  const theme = useRef<Theme>(Theme.DARK); // Map, Set
  // const theme = useRef(new Set()); // Map, Set

  const toggle = () => {
    // if (theme === Theme.DARK) {
    //   setTheme(Theme.LIGHT);
    //   document.body.classList.add("light");
    // } else {
    //   setTheme(Theme.DARK);
    //   document.body.classList.remove("light");
    // }
    if (theme.current === Theme.DARK) {
      theme.current = Theme.LIGHT;
      document.body.classList.add("light");
    } else {
      theme.current = Theme.DARK;
      document.body.classList.remove("light");
    }
  };
  return { theme, toggle };
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={useTheme()}>{children}</ThemeContext.Provider>
  );
};
