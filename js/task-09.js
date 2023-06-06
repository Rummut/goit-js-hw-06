function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body")

const buttonBackgroundColorEl = document.querySelector(".change-color")

const spanColorEl = document.querySelector(".color")

const handleBodyChangeColor = (event) => {
  bodyEl.style.backgroundColor = getRandomHexColor()
  spanColorEl.textContent = getRandomHexColor()
}

buttonBackgroundColorEl.addEventListener("click", handleBodyChangeColor)