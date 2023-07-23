import { ChangeEvent } from "react";

const darkThemeMQ = window.matchMedia("(prefers-color-scheme: dark)");
const htmlDoc = document.documentElement;

darkThemeMQ.addEventListener("change", (event: MediaQueryListEvent) => {
  if (event.matches) {
    htmlDoc.setAttribute("data-theme", "night");
  } else {
    htmlDoc.setAttribute("data-theme", "light");
  }
});
