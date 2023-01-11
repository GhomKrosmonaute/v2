import * as qs from "qs";

const rightButton = document.getElementById("left-button");
const middleButton = document.getElementById("middle-button");
const header = document.querySelector("header");

const parsed = qs.parse(location.search.substring(1));

// make listener
const toggleMenu = () => {
  header.classList.add("transition");
  header.classList.toggle("opened");

  setTimeout(() => {
    header.classList.remove("transition");

    history.pushState(
      null,
      "",
      qs.stringify({
        ...parsed,
        nav: header.classList.contains("opened") ? "1" : "",
      })
    );
  }, 500);
};

// add listener
middleButton.onclick = toggleMenu;
rightButton.onclick = toggleMenu;

if (parsed.nav === "1") header.classList.add("opened");
