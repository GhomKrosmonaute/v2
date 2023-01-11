import * as qs from "qs";

import Projects from "./pages/Projects";
import Career from "./pages/Career";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

const content = document.getElementById("content");
const links = document.querySelectorAll("nav ul li");
const parsed = qs.parse(location.search.substring(1));

console.log(parsed);

function showPage(pageNumber: number) {
  const page = [Projects, Career, Skills, Contact][pageNumber];
  content.innerHTML = `<h2> ${page.title} </h2>`;
}

if (typeof parsed.page === "number") showPage(parsed.page);

for (let i = 0; i < links.length; i++) {
  const link = links[i];
  link.addEventListener("click", (e) => {
    e.preventDefault();
    showPage(i);
  });
}
