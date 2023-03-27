import "./style.css";
import logo from "./mcd.jpg";

export default function initialPageload() {
    const header = document.createElement("header");
    // const headerDiv = document.createElement("div");
    // headerDiv.id = "main-heading";
    const mainLogo = new Image();
    mainLogo.id = "main-logo";
    mainLogo.src = logo;
    mainLogo.alt = "business logo";
    header.insertAdjacentElement("afterbegin", mainLogo);
    // const tabs = document.createElement("div");
    const tabsItems = ["Home", "Menu", "About"];
    for (const item of tabsItems) {
        const tabItem = document.createElement("div");
        tabItem.textContent = item;
        tabItem.className = "header-tab";
        header.insertAdjacentElement("beforeend", tabItem); 
    }
    // header.insertAdjacentElement("beforeend", tabs);
    return header;
}   