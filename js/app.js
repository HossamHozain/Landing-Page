// global variables
let nav = document.getElementsByClassName("navbar__menu")[0];
let sections = document.getElementsByTagName("section");
let myList = [];
let scrollToTopBtn = document.getElementsByClassName("up")[0];
createUl();
// create and append the ul
function createUl() {
  let ul = document.createElement("ul");
  // loop throught sections to create li for every section
  for (i = 0; i < sections.length; i++) {
    let elem = sections[i];
    let id = "#" + elem.id;
    let sectionName = elem.getAttribute("data-nav");
    let li = document.createElement("li");
    let link = document.createElement("a");
    ul.className = "navbar__menu";
    link.className = "menu__link";
    link.setAttribute("href", id);
    link.textContent = sectionName;
    li.appendChild(link);
    ul.appendChild(li);
    myList.push(li);
  }
  // after creating the ul append it to the navbar
  nav.appendChild(ul);
}
// add the active class to the active li and active section
function activeFun() {
  // when scroll show scroll to top button
  if (window.scrollY > 250) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
  // get array sections
  sections = Array.from(sections);
  // loop to check if section is close to the top
  sections.forEach((element) => {
    // get section id to taget its li by its attribute
    let id = "#" + element.id;
    let attr = "[href='" + id + "']";
    let li = document.querySelectorAll(attr)[0];
    // check if section is close to the top to add the active class to it and its li
    if (
      element.getBoundingClientRect().top < 200 &&
      element.getBoundingClientRect().top > -200
    ) {
      element.classList.add("active");
      li.classList.add("active");
    } else {
      if (element.classList.contains("active")) {
        element.classList.remove("active");
        li.classList.remove("active");
      }
    }
  });
}
// prevent the defaul scroll event and smooth scroll
function scrollOnClick(event) {
  if (event.target.matches("a")) {
    event.preventDefault();
    let id = event.target.getAttribute("href");
    let destnation = document.querySelector(id);
    destnation.scrollIntoView({
      behavior: "smooth",
    });
  }
}
// add the listeners
window.addEventListener("scroll", activeFun);
nav.addEventListener("click", scrollOnClick);
scrollToTopBtn.addEventListener("click", scrollOnClick);
