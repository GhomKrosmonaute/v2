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
    utils.createElementFromHTML(
      `<div class="swiper-slide">${project.name}</div>`
    )
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
