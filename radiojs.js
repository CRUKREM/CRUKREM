var current = 1;

var reset = function () {
	current = 1;
	document.getElementById("instructions1").style.display = "block";
	document.getElementById("myForm").style.display = "none";
	document.getElementById("submitAnswer").style.display = "block";
	showContent();
};

var prev = function () {
	current -= 1;
	if (current < 1) current = 5; // can't go too far previous
	showContent();
};

// function to go next
var next = function () {
	current += 1;
	if (current > 5) current = 5; // can't go too far forward
	showContent();
};

// Update what content we are showing based on the "current" index
var showContent = function () {
	var display;
	if (current == 5) {
		document.getElementById("instructions1").style.display = "none";
	}
	for (var i = 1; i < 7; i++) {
		if (i == current) {
			display = "block";
		} else {
			display = "none";
		}
		document.getElementById(i).style.display = display;
	}
};

// bind the prev and next function to the links
document.getElementById("prev").onclick = prev;
document.getElementById("next").onclick = next;

// Setup the initial state of the content
showContent();

function openForm() {
	document.getElementById("myForm").style.display = "block";
	document.getElementById("submitAnswer").style.display = "none";
	document.getElementById("4").style.display = "none";
	document.getElementById("instructions1").style.display = "none";
	document.getElementById("5").style.display = "block";
}

function closeForm() {
	document.getElementById("myForm").style.display = "none";
	document.getElementById("submitAnswer").style.display = "block";
	document.getElementById("4").style.display = "none";
}

function openInstructions() {
	document.getElementById("instructions").style.display = "block";
	document.getElementById("4").style.display = "none";
	document.getElementById("submitAnswer").style.display = "none";
}

function closeInstructions() {
	document.getElementById("instructions").style.display = "none";
	document.getElementById("4").style.display = "block";
	document.getElementById("submitAnswer").style.display = "block";
	document.getElementById("correct").style.display = "none";
	document.getElementById("incorrect").style.display = "none";
}

function checkAnswer() {
	var answer = document.getElementById("userGuess").value;
	if (answer === "130000") {
		document.getElementById("correct").style.display = "block";
		document.getElementById("myForm").style.display = "none";
	} else {
		document.getElementById("incorrect").style.display = "block";
		document.getElementById("myForm").style.display = "none";
	}
}