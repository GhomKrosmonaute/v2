const themeSwitch = document.getElementById("right-button");

// make listener
const switchTheme = () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.toString());
};

// add listener
themeSwitch.onclick = switchTheme;

// set theme on load
if (localStorage.getItem("theme") === "dark") switchTheme();
