function draw() {
  let canvas = document.getElementById("screen");
  canvas.width = window.innerWidth;
  canvas.height = window.innerWidth;
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
  }
