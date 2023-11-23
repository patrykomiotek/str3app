import {
  MutableRefObject,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

type ThemeContextType = {
  theme: MutableRefObject<Theme | null>;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const getMode = () => {
  if (window.matchMedia) {
    const matchesLightMode = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    return matchesLightMode ? Theme.LIGHT : Theme.DARK;
  }
  // there may not be window.matchMedia object - eg. in tests
  return null;
};

const addLightCssClass = () => document.body.classList.add("light");
const removeLightCssClass = () => document.body.classList.remove("light");

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context) {
    return context;
  }
  throw new Error("Oh no! Component should be placed inside ThemeProvider");
};

const useTheme = () => {
  // const [theme, setTheme] = useState<Theme>(Theme.DARK);
  const theme = useRef<Theme | null>(getMode()); // Map, Set
  // const theme = useRef(new Set()); // Map, Set

  useEffect(() => {
    // on the mount of component set additional class
    const themeMode = getMode();
    if (themeMode === Theme.LIGHT) {
      addLightCssClass();
    }

    // add listener for change preferences
    const handleSchemeChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        addLightCssClass();
      } else {
        removeLightCssClass();
      }
    };

    let query: MediaQueryList;
    if (themeMode !== null) {
      query = window.matchMedia("(prefers-color-scheme: light)");
      query.addEventListener("change", handleSchemeChange);
    }

    return () => {
      query?.removeEventListener("change", handleSchemeChange);
    };
  }, []);

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
      addLightCssClass();
    } else {
      theme.current = Theme.DARK;
      removeLightCssClass();
    }
  };
  return { theme, toggle };
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={useTheme()}>{children}</ThemeContext.Provider>
  );
};
