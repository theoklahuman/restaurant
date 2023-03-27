console.log("this works still!");

import initialPageload from "./homepage";
const content = document.querySelector("#content");

document.body.insertAdjacentElement("afterbegin", initialPageload());