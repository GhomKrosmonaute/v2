const themeSwitch = document.getElementById("theme-switch")

themeSwitch.onclick = () => {
  document.body.classList.toggle("light")
  document.body.classList.toggle("dark")
  themeSwitch.innerText = document.body.classList.toString()
}