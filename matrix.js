import letters from "./letters.js";

export default class Matrix {
  constructor() {
    this.fontSize = 18;
    this.canvas = document.getElementById("matrix");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.columns = Number.parseInt(this.canvas.width / this.fontSize, 10);
    this.drops = Array(this.columns).fill(1);
  }

  draw() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "#0F0";
    this.ctx.font = this.fontSize + "px arial";

    for (let i = 0; i < this.drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);

      if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }

      this.drops[i]++;
    }
  }

  initialize() {
    setInterval(this.draw.bind(this), 30);
  }
}
