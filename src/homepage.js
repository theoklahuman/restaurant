import "./style.css";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import logo from "./mcd.jpg";

export default function initialPageload() {
    const header = document.createElement("header");
    const mainLogo = new Image();
    mainLogo.id = "main-logo";
    mainLogo.src = logo;
    mainLogo.alt = "business logo";
    header.insertAdjacentElement("afterbegin", mainLogo);
    const tabsItems = ["Home", "About", "Contact", "Employment"];
    for (const item of tabsItems) {
        const tabItem = document.createElement("div");
        tabItem.textContent = item;
        tabItem.className = "header-tab";
        tabItem.id = item.toLowerCase();
        header.insertAdjacentElement("beforeend", tabItem); 
    }
    return header;
}   

export class HomepageContent {
    makeRotatingPictures() {
        const rotatingPicturesSection = document.createElement("section");
        rotatingPicturesSection.className = "rotating-pictures-section";
        rotatingPicturesSection.textContent = "Do you want a message here?";
        return rotatingPicturesSection;
    }
    makeImageForHomepage() {
        const homepageBodySectionImages = document.createElement("main");
        homepageBodySectionImages.className = "homepage-pictures-section";
        const imagesForHomepageBodySection = [
          "homepage image1",
          "homepage image2",
          "homepage image3",
          "homepage image4",
          "homepage image5",
          "homepage image6",
        ];
        for (const images of imagesForHomepageBodySection) {
          const imageForHomepageBodySection = document.createElement("img");
          imageForHomepageBodySection.href = "#";
          imageForHomepageBodySection.alt = images;
          homepageBodySectionImages.insertAdjacentElement(
            "beforeend",
            imageForHomepageBodySection
          );
        }
        return homepageBodySectionImages;
    }
    makeFooter() {
        const facebookLogo = new Image();
        facebookLogo.src = facebook;
        facebookLogo.alt = "facebook logo";
        facebookLogo.className = "footer-logos";
        const instagramLogo = new Image();
        instagramLogo.src = instagram;
        instagramLogo.alt = "instagram logo";
        instagramLogo.className = "footer-logos";
        const twitterLogo = new Image();
        twitterLogo.src = twitter;
        twitterLogo.alt = "twitter logo";
        twitterLogo.className = "footer-logos";
        const homepageFooter = document.createElement("footer");
        const homepageFooterParagraph = document.createElement("p");
        homepageFooterParagraph.className = "footer-main-message";
        homepageFooterParagraph.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum mattis. Ultrices vitae auctor eu augue. Vulputate eu scelerisque felis imperdiet proin fermentum. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Et magnis dis parturient montes nascetur ridiculus mus mauris.`;
        homepageFooter.appendChild(homepageFooterParagraph);
        const socialMediaLinksContainer = document.createElement("div");
        socialMediaLinksContainer.class = "social-media__links";
        const socialMediaLogos = [facebookLogo, instagramLogo, twitterLogo];
        for (const images of socialMediaLogos) {
          socialMediaLinksContainer.insertAdjacentElement("beforeend", images);
        }
    
        homepageFooter.insertAdjacentElement(
          "beforeend",
          socialMediaLinksContainer
        );
        const contactInfoSection = document.createElement("section");
        contactInfoSection.className = "homepage-contact-info-section";
        const contactInfoSectionContent = [
          "Phone: 405123456",
          "Mobile: 405654321",
          "Email: info@thisisjustatest.com",
        ];
        for (const info of contactInfoSectionContent) {
          const contactInfoDiv = document.createElement("div");
          contactInfoDiv.textContent = info;
          contactInfoSection.appendChild(contactInfoDiv);
        }
        homepageFooter.appendChild(contactInfoSection);
        return homepageFooter;
      }
}