let canvas = document.querySelector("canvas");

canvas.width = 600;
canvas.height = 300;

let c = canvas.getContext("2d");

let mouse = {
  x: undefined,
  y: undefined,
};

let mouseDown = false;

window.addEventListener("mousedown", function (event) {
  if (event.button === 0) {
    mouseDown = true;
  }
});

window.addEventListener("mousemove", function (event) {
  if (mouseDown) {
    let rect = canvas.getBoundingClientRect();
    console.log(rect)
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
    c.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    }, 1)`;
    c.fillRect(mouse.x, mouse.y, 5, 5);
  }
});

window.addEventListener("mouseup", function (event) {
  if (event.button === 0) {
    mouseDown = false;
  }
});

window.addEventListener("click", (event) => {
  if (event.button === 0) {
    mouse.x = event.x;
    mouse.y = event.y;
    c.fillStyle = "rgba(255, 0, 0, 0.5)";
    c.fillRect(mouse.x, mouse.y, 5, 5);
  }
});

// Rectangulo

// c.fillStyle = "rgba(255, 0, 0, 0.5)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(0, 0, 255, 0.5)";
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = "rgba(0, 255, 0, 0.5)";
// c.fillRect(300, 300, 100, 100);

// Linea

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#fa34a3";
// c.stroke();

// Circulo

// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();
