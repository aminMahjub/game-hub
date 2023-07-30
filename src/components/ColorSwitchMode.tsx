import { useState, useEffect } from "react";
import { IoIosCheckmark } from "react-icons/io";

const ColorSwitchMode = () => {
  const [themeStatus, setThemeStatus] = useState(localStorage.getItem("theme") ?? 'system');

  useEffect(() => {
    const darkThemeMQ = window.matchMedia("(prefers-color-scheme: dark)");
    const htmlDoc = document.documentElement;
    let currentTheme: string | null = themeStatus;

    const determineSystemTheme = () => {
      const currentSystemTheme = darkThemeMQ.matches ? "night" : "light";
      localStorage.setItem("theme", 'system');
      htmlDoc.setAttribute("data-theme", currentSystemTheme);

      return currentSystemTheme;
    };

    if (themeStatus === "system") {
      currentTheme = determineSystemTheme();
      darkThemeMQ.addEventListener("change", determineSystemTheme);
    } else {
      localStorage.setItem("theme", currentTheme);
      htmlDoc.setAttribute("data-theme", currentTheme);
    }

    return () => {
      darkThemeMQ.removeEventListener("change", determineSystemTheme);
    };
  }, [themeStatus]);

  return (
    <>
      <div className="dropdown dropdown-bottom dropdown-end">
        <label tabIndex={0} className="cursor-pointer">
          Theme
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
        >
          {themes.map((theme) => {
            return (
              <li key={theme} onClick={() => setThemeStatus(theme)}>
                <a href="#" className="flex justify-start items-center">
                  {themeStatus === theme && (
                    <IoIosCheckmark color="red" size={25} />
                  )}
                  <p className="">{theme}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const themes = ["night", "light", "system"];

export default ColorSwitchMode;
