const rightButton = document.getElementById("left-button");
const middleButton = document.getElementById("middle-button");
const header = document.querySelector("header");

// make listener
const toggleMenu = () => {
  header.classList.add("transition");
  header.classList.toggle("opened");

  setTimeout(() => {
    header.classList.remove("transition");
  }, 500);
};

// add listener
middleButton.onclick = toggleMenu;
rightButton.onclick = toggleMenu;
