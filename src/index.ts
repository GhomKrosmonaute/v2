export * as observation from "./app/observation"
export * as storage from "./app/storage"
export * as theme from "./app/theme"

import * as utils from "./app/utils"
import * as data from "./app/data"

import Swiper from "swiper"
import "swiper/swiper-bundle.css"

const $wrapper = document.querySelector(".swiper-wrapper")

data.projects.forEach((project) => {
  $wrapper.appendChild(
    utils.createElementFromHTML(`
      <div class="swiper-slide flex">
        <div class="swiper-image-container">
          <img src="${project.image}" alt="${project.name} logo">
        </div>
        <div class="swiper-">
          <h2>${project.name}</h2>
          <p>${project.description}</p>
          <ul>
            ${project.technologies
              .map((techno) => `<li>${techno}</li>`)
              .join("")}
          </ul>
        </div>
      </div>
    `)
  )
})

new Swiper(".swiper-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  allowSlideNext: true,
  allowSlidePrev: true,
})
