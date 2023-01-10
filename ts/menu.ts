const menuButton = document.getElementById("menu-button");
const navSlide = document.getElementById("nav-slide");

// make listener
const toggleMenu = () => {
  navSlide.classList.toggle("opened");
};

// add listener
menuButton.onclick = toggleMenu;
