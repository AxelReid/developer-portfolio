import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const themeInitial = (): "dark" | "light" => {
  if (
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
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(themeInitial());
  }, []);

  const handle = () => {
    const DOM_html = document.documentElement.classList;
    if (!DOM_html.value.includes("dark")) {
      DOM_html.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      DOM_html.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <button onClick={handle} className="btn h-10 w-10">
      {theme === "dark" ? <SunIcon /> : <MoonIcon className="p-px" />}
    </button>
  );
};

export default ThemeSwitcher;
