const button = document.querySelector(".number-of-squares");

drawOnce(16);

function removeGrid() {
  let container = document.querySelector(".container");
  container.remove();
  const drawRoomContainer = document.querySelector(".draw-room");
  container = document.createElement("div");
  container.classList.toggle("container");
  drawRoomContainer.append(container);
}

button.addEventListener("click", () => {
  removeGrid();
  const numberOfSquaresInputted = prompt(
    "Enter the number of squares from 1 to 100"
  );
  if (numberOfSquaresInputted >= 1 && numberOfSquaresInputted <= 100) {
    drawOnce(+numberOfSquaresInputted);
  } else {
    alert(`This ain't it, chief`);
  }
});

function drawOnce(numberOfSquares) {
  let container = document.querySelector(".container");

  for (let x = 1; x <= numberOfSquares; x++) {
    for (let y = 1; y <= numberOfSquares; y++) {
      var divisionUnit = document.createElement("div");
      divisionUnit.classList.toggle("division-unit");
      container.append(divisionUnit);
      divisionUnit.setAttribute(
        "style",
        `width: ${800 / numberOfSquares}px; height: ${800 / numberOfSquares}px;`
      );
    }
  }

  const divNode = document.querySelectorAll(".division-unit");

  divNode.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      var rgb = element.style.backgroundColor;

      rgb = rgb
        .substring(4, rgb.length - 1)
        .replace(/ /g, "")
        .split(",");

      if (element.style.backgroundColor == ``) {
        element.setAttribute(
          "style",
          `background-color: rgb(${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)}); 
        width: ${800 / numberOfSquares}px; height: ${800 / numberOfSquares}px;`
        );
      } else {
        element.setAttribute(
          "style",
          `background-color: rgba(${rgb[0] - 25}, ${rgb[1] - 25}, ${
            rgb[2] - 25
          });
        width: ${800 / numberOfSquares}px; height: ${800 / numberOfSquares}px;`
        );
      }
    });
  });
}
