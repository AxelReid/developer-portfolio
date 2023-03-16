import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

const themeInitial = (): "dark" | "light" => {
  if (typeof window === "undefined") return "dark";
  if (
    !localStorage.theme ||
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    return "dark";
  }
  {
    localStorage.removeItem("theme");
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
