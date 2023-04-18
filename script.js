const container = document.querySelector(".container");

for (let x = 1; x <= 16; x++) {
  for (let y = 1; y <= 16; y++) {
    var divisionUnit = document.createElement("div");
    divisionUnit.classList.toggle("division-unit");
    container.append(divisionUnit);
  }
}
