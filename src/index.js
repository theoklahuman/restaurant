console.log("this works still!");

import initialPageload from "./homepage";
import { HomepageContent } from "./homepage";
import AboutPage from "./about";
const content = document.querySelector("#content");

document.body.insertAdjacentElement("afterbegin", initialPageload());


function loadHomepage() {
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

loadHomepage();