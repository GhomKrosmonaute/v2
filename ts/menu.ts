const rightButton = document.getElementById("left-button");
const middleButton = document.getElementById("middle-button");

// make listener
const toggleMenu = () => {
  document.querySelector("header").classList.toggle("opened");
  console.log();
};

// add listener
middleButton.onclick = toggleMenu;
rightButton.onclick = toggleMenu;
