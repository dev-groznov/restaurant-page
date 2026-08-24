import "./styles.css";
import { createHomePage } from "./script/home.js";
import { createMenuPage } from "./script/menu.js";
import { createAboutPage } from "./script/about.js";


const content = document.querySelector(".content");

const homeBtn = document.querySelector(".home-btn");
homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    createHomePage()
})

const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", (e) => {
    content.innerHTML = "";
    createMenuPage()
})

const aboutBtn = document.querySelector(".about-btn");
aboutBtn.addEventListener("click", (e) => {
    content.innerHTML = "";
    createAboutPage()
})

createHomePage()