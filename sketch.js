let filesAmount;
let maxAmount = 500;
let width;

let display = {
	canvas : document.createElement("canvas"),

	show : function() {
		let display = document.getElementById("meter-position");
		this.canvas.id = "amount-visualizer";

		// Get canvas size in updateDisplay()
		this.context = this.canvas.getContext("2d");
		display.appendChild(this.canvas);
		updateDisplay();
	},

	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
}

function updateDisplay() {
	// Update canvas and it's contents every 100ms (can be changed below)
	setInterval(function () {
		let containerWidth = document.getElementById("meter-position").offsetWidth;

		display.clear();
		display.canvas.width = containerWidth;
		display.canvas.height = 20;

		// Visualize amount of the files in a directory
		// by changing the rectangles' size
		// This version changes the colored areas' size according
		// to the size of the area to be colored

		let green = "rgb(0, 220, 0)";
		let orange = "rgb(255, 185, 70)";
		let red = "rgb(245, 120, 66)";

		// filesAmount < 250
		width = filesAmount*display.canvas.width / 500;
		display.context.fillStyle = green;
		display.context.fillRect(0, 0, width, display.canvas.height);

		// filesAmount > 250
		if (width > display.canvas.width/2) {
			display.context.fillStyle = orange;
			display.context.fillRect(display.canvas.width/2, 0, display.canvas.width/2 + width - display.canvas.width, display.canvas.height);
		}

		// filesAmount > 375
		if (width > display.canvas.width/2 + display.canvas.width/4) {
			display.context.fillStyle = red;
			display.context.fillRect(display.canvas.width - display.canvas.width/4, 0, display.canvas.width/4 + width - display.canvas.width, display.canvas.height);
		}
	}, 100);
}

// Display the canvas and directories as soon as HTML body
// is loaded (in: index.html)
function setup() {
	display.show();
	showDir();
}