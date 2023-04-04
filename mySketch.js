let myText;
let pixValsTextObj;
let letters = [];
let pixelValsArr = [];
//goal: show bukowski with roll the dice. 

//loading the text
function preload() {
	myText = loadStrings("rollthedicelonger.txt");
	pixValsTextObj = loadStrings("pixelValues.txt");
}

function setup() {
	createCanvas(1000, 1000);
	background(225);

	for (let i = 0; i < pixValsTextObj.length; i++) {
		pixelValsArr.push(pixValsTextObj[i]);
		print(pixelValsArr[i]);
	}

	for (let i = 0; i < myText.length; i++) {
		// print(myText[i]);
		let cleanText = myText[i].replaceAll(",", "")
			.replaceAll(".", "")
			.replaceAll(";", "")
			.replaceAll(" ", "")
			.replaceAll("'", "")
			.replaceAll("-", "")
			.toLowerCase();


		let localLetters = cleanText.split("");
		print(localLetters);

		for (let i = 0; i < localLetters.length; i++) {
			letters.push(localLetters[i]);
		}

	}
	let moveRight = 5;
	let moveDown = 10;
	for (let i = 0; i < letters.length; i++) {
		if (moveRight > width) {
			moveRight = 5;
			moveDown += 10;
		}
		if (pixelValsArr[i] < 64) {

			textSize(19);
			text(letters[i], moveRight, moveDown);
			moveRight += 10;
		} else if (pixelValsArr[i] > 63 && pixelValsArr[i] < 128) {
			textSize(15);
			text(letters[i], moveRight, moveDown);
			moveRight += 10;
		} else if (pixelValsArr[i] > 127 && pixelValsArr[i] < 192) {
			textSize(14);
			text(letters[i], moveRight, moveDown);
			moveRight += 10;
		} else if (pixelValsArr[i] > 191 && pixelValsArr[i] < 223) {
			textSize(13);
			text(letters[i], moveRight, moveDown);
			moveRight += 10;
		}	else if (pixelValsArr[i] > 191 && pixelValsArr[i] < 239) {
			textSize(12);
			text(letters[i], moveRight, moveDown);
			moveRight += 10;
		}	else {
			textSize(10);
			text(letters[i], moveRight, moveDown);
			moveRight += 10;
		}


	}
}

function draw() {}