const circle = document.querySelector("div#circle");
const buttons = document.getElementsByTagName("button");

for (let button of buttons) {
  button.addEventListener("click", () => {
    positionProperty = button.id.split("-")[0];
    unitValue = 10;
    if (positionProperty === "bottom") {
      positionProperty = "top";
      unitValue = -10;
    } else if (positionProperty === "left") {
      positionProperty = "right";
      unitValue = -10;
    }
    currentValue = circle.style[positionProperty] || getComputedStyle(circle)[positionProperty];
    currentValue = currentValue.replace("px", "");
    newValue = Number(currentValue) + unitValue;
    circle.style[positionProperty] = `${newValue}px`;
  })
}
