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
      element.setAttribute(
        "style",
        `background-color: rgb(15, 15, 15); 
        width: ${800 / numberOfSquares}px; height: ${800 / numberOfSquares}px;`
      );
    });
  });
}
