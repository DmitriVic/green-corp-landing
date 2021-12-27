//const canvas = document.getElementById("orb-canvas");
const COLORS = ["255,108,80", "5,117,18", "29,39,57", "67,189,81"];

function generateDecimalBetween(left, right) {
	return (Math.random() * (left - right) + right).toFixed(2);
 }

class Bubble {
	constructor(canvas) {
		this.canvas = canvas;

    this.getCanvasSize();

    this.init();
	}
 
	getCanvasSize() {
		this.canvasWidth = this.canvas.clientWidth;
  		this.canvasHeight = this.canvas.clientHeight;
	}
 
	init() {
		this.color = COLORS[Math.floor(Math.random() * COLORS.length -1)] // = ...
		this.alpha = Math.floor(Math.random() * (10 - 5 + 1)) + 5; // = ...
		this.size = Math.ceil(Math.random() * 3); // = ...
		this.translateX = Math.floor(Math.random() * this.canvasWidth); // = ...
		this.translateY = Math.floor(Math.random() * this.canvasHeight); // = ...
		this.velocity = generateDecimalBetween(20, 40);
		this.movementX = generateDecimalBetween(-2, 2) / this.velocity;
		this.movementY = generateDecimalBetween(1, 20) / this.velocity;
	}
 
	move() {
		this.translateX = this.translateX - this.movementX
		this.translateY = this.translateY - this.translateY
		if (this.translateY < 0 || this.translateX < 0 || this.translateX > this.canvasWidth) {
			this.init();
			this.translateY = this.canvasHeight;
		 }
	}
 }
 
//Math.ceil(Math.random() * 3)
//Math.floor(Math.random() * 500)

const canvas = document.getElementById("orb-canvas");

// const bubbles = [];
// bubbles.push(new Bubble(canvas));
// bubbles.push(new Bubble(canvas));
// bubbles.push(new Bubble(canvas));

// console.log(bubbles);

class CanvasBackground {
	constructor(canvas = document.getElementById("orb-canvas")) {
		this.ctx = canvas.getContext
		dpr = window.devicePixelRatio
	}
 
	start() {
		this.canvasSize();
		this.generateBubbles();
		this.animate();
	}
 }