import initialPageload from "./homepage";
import { HomepageContent } from "./homepage";
import AboutPage from "./about";
const content = document.querySelector("#content");
document.body.insertAdjacentElement("afterbegin", initialPageload());

function loadHomepage() {
  content.innerHTML = "";
  content.append(
    new HomepageContent().makeRotatingPictures(),
    new HomepageContent().makeImageForHomepage(),
    new HomepageContent().makeFooter()
  );
}

function loadAboutPage() {
  content.innerHTML = "";
  content.appendChild(new AboutPage().createAboutPageInfo());
}

const tabMenuOptions = document.body.querySelector("header");
tabMenuOptions.addEventListener("click", (e) => {
  const selectedOption = e.target.id;
  if (selectedOption === "home") {
    loadHomepage();
  } else if (selectedOption === "about") {
    loadAboutPage();
  } else {
    console.log(selectedOption);
  }
});

loadHomepage();