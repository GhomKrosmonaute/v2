import * as qs from "qs";

import projects from "./pages/Projects";
import career from "./pages/Career";
import skills from "./pages/Skills";
import contact from "./pages/Contact";

const content = document.getElementById("content");
const links = document.querySelectorAll("nav ul li");

const parsed = qs.parse(location.search.substring(1));

const showPage = (pageName: string) => {
  const page = {
    projects,
    career,
    skills,
    contact,
  }[pageName];

  content.innerHTML = `
    <h2> ${page.title} </h2>
    <ul class="tags">
      ${page.tags.map((tag) => `<li>${tag}</li>`).join("")}
    </ul>
    <content>
      ${page.body}
    </content>
  `;
};

if (typeof parsed.page === "string" && parsed.page.length > 0)
  showPage(parsed.page);

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    showPage(link.id);

    history.pushState(
      null,
      "",
      qs.stringify({
        nav: 1,
        page: link.id,
      })
    );
  });
});
