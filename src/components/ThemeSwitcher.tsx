import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

const themeInitial = (): "dark" | "light" => {
  if (typeof window === "undefined") return "dark";
  const themeInLocalstorage = localStorage.getItem("theme");

  if (!themeInLocalstorage || themeInLocalstorage.includes("dark")) {
    document.documentElement.classList.add("dark");
    return "dark";
  } else {
    return "light";
  }
};

const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage<"dark" | "light">("theme", "dark");

  useEffect(() => {
    setTheme(themeInitial());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handle = () => {
    const DOM_html = document.documentElement.classList;
    if (!DOM_html.value.includes("dark")) {
      DOM_html.add("dark");
      setTheme("dark");
    } else {
      DOM_html.remove("dark");
      setTheme("light");
    }
  };

  return (
    <button onClick={() => handle()} className="btn h-10 w-10">
      {theme === "dark" ? <SunIcon /> : <MoonIcon className="p-px" />}
    </button>
  );
};

export default ThemeSwitcher;
