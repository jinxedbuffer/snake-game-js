function draw() {
  let canvas = document.getElementById("screen");
  canvas.width = screen.innerWidth;
  canvas.height = screen.innerWidth;
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
  }
