import {navContainer} from "./app.js";

let homeContent = document.getElementsByClassName("home-content")[0];
let navItems = document.querySelectorAll(".nav-container ul li a");


let sections = document.querySelectorAll(".section");

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3
}
let count = 0;
let sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry,index) => {
    if (!entry.isIntersecting)
      return;
    else {
      if(entry.target.classList.contains("home")  && count === 0) {
        navContainer.classList.add("slide-down");
        homeContent.classList.add("slide-up");
        count +=1;
        setTimeout(() => {
          navContainer.classList.remove("slide-down");
          homeContent.classList.remove("slide-up");
        },2000)
      }
      else if (entry.target.classList.contains("about")) {
        console.log("in about");
      }

      navItems.forEach((item) => {
        if(item.innerHTML === entry.target.id) {
          item.classList.add("is-active");
        } else {
          if(item.classList.contains("is-active")) {
            item.classList.remove("is-active");
          } else {

          }
        }
      })

    }
  })
},options);

sections.forEach((section) => {
  sectionObserver.observe(section);
})





// border-bottom under nav items
// console.log(navItems);
// navItems.forEach((item) => {
//   item.addEventListener(("click"),(event) => {
//     // if(item.classList.contains("is-active")) {

//     // } else {
//     //   navItems.forEach((item1) => {
//     //     if(item1.classList.contains("is-active")) {
//     //       item1.classList.remove("is-active");
//     //     }
//     //   })
//     //   item.classList.add("is-active");
//     // }
//     console.log(event.target);
//   })
// });