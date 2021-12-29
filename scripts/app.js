let menu = document.getElementById("menu-icon");
export let navContainer = document.querySelector("nav .nav-container");

menu.addEventListener("click", () => {
  if (screen.width > 768) {
    return;
  } else {
    if(navContainer.style.display === "" || navContainer.style.display === "none") {
      navContainer.style.display = "block";
      navContainer.style.width = "50%";
    } else {
      navContainer.style.display = "none";
      navContainer.style.width = "0px";
    }
  }
})

document.addEventListener("click", (event) => {
  if(event.target !== menu && navContainer.style.display === "block") {
    navContainer.style.display = "none";
    navContainer.style.width = "0px";
  }
})


let darkModeToggle = document.getElementsByClassName("dark-mode-btn")[0];
let switchIcon = 0;
let darkModeIcon = document.getElementsByClassName("dark-mode-icon")[0];

darkModeIcon.textContent = "☾";
darkModeToggle.addEventListener("click", () => {
  if(switchIcon === 0) {
    switchIcon = 1;
    darkModeIcon.textContent = "✧";
  } else {
    switchIcon = 0;
    darkModeIcon.textContent = "☾";
  }
  document.body.classList.toggle("dark");
});



