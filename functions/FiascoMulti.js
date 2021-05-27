let playerLockedCounter = 0;
let tiltCounter = 0;
let disableDice = 0;

function enablePlay(selectObject) {
	var value = selectObject.value;
	document.getElementById("playerCount").disabled = false;
	document.getElementById("playerCount").style.opacity = 1;
}

function playerCount() {

	let playerCountNumber = document.getElementById("players").value;
	console.log(playerCountNumber);
	document.getElementById("playerCount").disabled = true;
	document.getElementById("players").disabled = true;
	document.getElementById("players").style.opacity = 0.4;
	document.getElementById("playerCount").style.opacity = 0.4;
	document.getElementById("rollButton").disabled = false;
	document.getElementById("diceRolling").style.pointerEvents = "auto";
	document.getElementById("diceRolling").style.opacity = 1;
	let playerTotalCount = document.getElementById("players").value;
	let playerTotalCountTwo = playerTotalCount * 2;
	document.getElementById("halfWayChecker").value = playerTotalCountTwo;
	//enter black/white dice
	document.getElementById("blackDieText").value = playerTotalCountTwo;
	document.getElementById("whiteDieText").value = playerTotalCountTwo;
	//show cards
	document.getElementById("diceRolling").hidden = false;
	document.getElementById("playerInformation").hidden = false;
	document.getElementById("firstRow").hidden = true;


	//spawn player boxes
	if (playerTotalCount == '3') {
		//unlock player information card
		document.getElementById("playerInformation").style.pointerEvents = "auto";
		document.getElementById("playerInformation").style.opacity = 1;

		var slotFour = document.getElementById("playerFourSlot");
		slotFour.remove();
		var slotFive = document.getElementById("playerFiveSlot");
		slotFive.remove();
		document.getElementById("playerInformation").style.flexDirection = "row";
		document.getElementById("playerInformation").style.alignItems = "center";


	} else if (playerTotalCount == '4') {

		document.getElementById("playerInformation").style.pointerEvents = "auto";
		document.getElementById("playerInformation").style.opacity = 1;

		var slotFive = document.getElementById("playerFiveSlot");
		slotFive.remove();
		document.getElementById("playerInformation").style.flexDirection = "row";
		document.getElementById("playerInformation").style.alignItems = "center";

	} else

	{
		document.getElementById("playerInformation").style.pointerEvents = "auto";
		document.getElementById("playerInformation").style.opacity = 1;
	}
}

function rollDice() {

	document.getElementById("rollButton").disabled = true;

	//play audio
	var diceRoll = document.getElementById("myAudio");
	diceRoll.play();

	//get the random number of die to roll based off of playerCount number
	let playerTotalCount = document.getElementById("players").value;

	switch (playerTotalCount) {
		case '3':

			let number1 = Math.floor(Math.random() * 6) + 1;
			let number2 = Math.floor(Math.random() * 6) + 1;
			let number3 = Math.floor(Math.random() * 6) + 1;
			let number4 = Math.floor(Math.random() * 6) + 1;
			let number5 = Math.floor(Math.random() * 6) + 1;
			let number6 = Math.floor(Math.random() * 6) + 1;

			let caseThreeArray = [number1, number2, number3, number4, number5, number6];
			document.getElementById("rollResult").value = caseThreeArray;

			console.log("case 3");
			console.log(number1, number2, number3, number4, number5, number6);

			//put the numbers into the text boxes
			const a = caseThreeArray.filter(a => a === 1).length;
			const b = caseThreeArray.filter(b => b === 2).length;
			const c = caseThreeArray.filter(c => c === 3).length;
			const d = caseThreeArray.filter(d => d === 4).length;
			const e = caseThreeArray.filter(e => e === 5).length;
			const f = caseThreeArray.filter(f => f === 6).length;


			document.getElementById("rollOneText").value = a;
			document.getElementById("rollTwoText").value = b;
			document.getElementById("rollThreeText").value = c;
			document.getElementById("rollFourText").value = d;
			document.getElementById("rollFiveText").value = e;
			document.getElementById("rollSixText").value = f;

			//disabled/enable buttons based on rolls
			if (rollOneText.value != 0) {
				document.getElementById("buttonOne").disabled = false;
			} else {
				document.getElementById("buttonOne").disabled = true;
			}

			if (rollTwoText.value != 0) {
				document.getElementById("buttonTwo").disabled = false;
			} else {
				document.getElementById("buttonTwo").disabled = true;
			}

			if (rollThreeText.value != 0) {
				document.getElementById("buttonThree").disabled = false;
			} else {
				document.getElementById("buttonThree").disabled = true;
			}

			if (rollFourText.value != 0) {
				document.getElementById("buttonFour").disabled = false;
			} else {
				document.getElementById("buttonFour").disabled = true;
			}

			if (rollFiveText.value != 0) {
				document.getElementById("buttonFive").disabled = false;
			} else {
				document.getElementById("buttonFive").disabled = true;
			}

			if (rollSixText.value != 0) {
				document.getElementById("buttonSix").disabled = false;
			} else {
				document.getElementById("buttonSix").disabled = true;
			}

			break;

		case '4':

			let number7 = Math.floor(Math.random() * 6) + 1;
			let number8 = Math.floor(Math.random() * 6) + 1;
			let number9 = Math.floor(Math.random() * 6) + 1;
			let number10 = Math.floor(Math.random() * 6) + 1;
			let number11 = Math.floor(Math.random() * 6) + 1;
			let number12 = Math.floor(Math.random() * 6) + 1;
			let number13 = Math.floor(Math.random() * 6) + 1;
			let number14 = Math.floor(Math.random() * 6) + 1;

			let caseFourArray = [number7, number8, number9, number10, number11, number12, number13, number14];
			document.getElementById("rollResult").value = caseFourArray;

			console.log("case 4");
			console.log(number7, number8, number9, number10, number11, number12, number13, number14);

			//put the numbers into the text boxes
			const g = caseFourArray.filter(a => a === 1).length;
			const h = caseFourArray.filter(b => b === 2).length;
			const i = caseFourArray.filter(c => c === 3).length;
			const j = caseFourArray.filter(d => d === 4).length;
			const k = caseFourArray.filter(e => e === 5).length;
			const l = caseFourArray.filter(f => f === 6).length;


			document.getElementById("rollOneText").value = g;
			document.getElementById("rollTwoText").value = h;
			document.getElementById("rollThreeText").value = i;
			document.getElementById("rollFourText").value = j;
			document.getElementById("rollFiveText").value = k;
			document.getElementById("rollSixText").value = l;

			//disabled/enable buttons based on rolls
			if (rollOneText.value != 0) {
				document.getElementById("buttonOne").disabled = false;
			} else {
				document.getElementById("buttonOne").disabled = true;
			}

			if (rollTwoText.value != 0) {
				document.getElementById("buttonTwo").disabled = false;
			} else {
				document.getElementById("buttonTwo").disabled = true;
			}

			if (rollThreeText.value != 0) {
				document.getElementById("buttonThree").disabled = false;
			} else {
				document.getElementById("buttonThree").disabled = true;
			}

			if (rollFourText.value != 0) {
				document.getElementById("buttonFour").disabled = false;
			} else {
				document.getElementById("buttonFour").disabled = true;
			}

			if (rollFiveText.value != 0) {
				document.getElementById("buttonFive").disabled = false;
			} else {
				document.getElementById("buttonFive").disabled = true;
			}

			if (rollSixText.value != 0) {
				document.getElementById("buttonSix").disabled = false;
			} else {
				document.getElementById("buttonSix").disabled = true;
			}

			break;

		case '5':

			let number15 = Math.floor(Math.random() * 6) + 1;
			let number16 = Math.floor(Math.random() * 6) + 1;
			let number17 = Math.floor(Math.random() * 6) + 1;
			let number18 = Math.floor(Math.random() * 6) + 1;
			let number19 = Math.floor(Math.random() * 6) + 1;
			let number20 = Math.floor(Math.random() * 6) + 1;
			let number21 = Math.floor(Math.random() * 6) + 1;
			let number22 = Math.floor(Math.random() * 6) + 1;
			let number23 = Math.floor(Math.random() * 6) + 1;
			let number24 = Math.floor(Math.random() * 6) + 1;

			let caseFiveArray = [number15, number16, number17, number18, number19, number20, number21, number22, number23, number24];
			document.getElementById("rollResult").value = caseFiveArray;


			console.log("case 5");
			console.log(number15, number16, number17, number18, number19, number20, number21, number22, number23, number24);

			//put the numbers into the text boxes
			const m = caseFiveArray.filter(a => a === 1).length;
			const n = caseFiveArray.filter(b => b === 2).length;
			const o = caseFiveArray.filter(c => c === 3).length;
			const p = caseFiveArray.filter(d => d === 4).length;
			const q = caseFiveArray.filter(e => e === 5).length;
			const r = caseFiveArray.filter(f => f === 6).length;


			document.getElementById("rollOneText").value = m;
			document.getElementById("rollTwoText").value = n;
			document.getElementById("rollThreeText").value = o;
			document.getElementById("rollFourText").value = p;
			document.getElementById("rollFiveText").value = q;
			document.getElementById("rollSixText").value = r;

			//disabled/enable buttons based on rolls
			if (rollOneText.value != 0) {
				document.getElementById("buttonOne").disabled = false;
			} else {
				document.getElementById("buttonOne").disabled = true;
			}

			if (rollTwoText.value != 0) {
				document.getElementById("buttonTwo").disabled = false;
			} else {
				document.getElementById("buttonTwo").disabled = true;
			}

			if (rollThreeText.value != 0) {
				document.getElementById("buttonThree").disabled = false;
			} else {
				document.getElementById("buttonThree").disabled = true;
			}

			if (rollFourText.value != 0) {
				document.getElementById("buttonFour").disabled = false;
			} else {
				document.getElementById("buttonFour").disabled = true;
			}

			if (rollFiveText.value != 0) {
				document.getElementById("buttonFive").disabled = false;
			} else {
				document.getElementById("buttonFive").disabled = true;
			}

			if (rollSixText.value != 0) {
				document.getElementById("buttonSix").disabled = false;
			} else {
				document.getElementById("buttonSix").disabled = true;
			}

			break;

		default:
			console.log("default");
	}


}

function subtractOne() {
	let rollOneText = document.getElementById("rollOneText").value;
	let rollOne = parseInt(rollOneText);
	disableDice++;

	if (rollOne > 0) {
		rollOne--;
		document.getElementById('rollOneText').value = rollOne;
		//play audio
		var useDice = document.getElementById("myAudioUse");
		useDice.play();
		if (document.getElementById("tiltPicture").style.opacity == 1) {
			tiltCounter++;
			TiltCounter();
		}
		if (rollOne == 0) {
			document.getElementById("buttonOne").disabled = true;
		}
	}
	StartGame();
}


function subtractTwo() {
	let rollTwoText = document.getElementById("rollTwoText").value;
	let rollTwo = parseInt(rollTwoText);
	disableDice++;

	if (rollTwo > 0) {
		rollTwo--;
		document.getElementById('rollTwoText').value = rollTwo;
		//play audio
		var useDice = document.getElementById("myAudioUse");
		useDice.play();
		if (document.getElementById("tiltPicture").style.opacity == 1) {
			tiltCounter++;
			TiltCounter();
		}
		if (rollTwo == 0) {
			document.getElementById("buttonTwo").disabled = true;
		}
	}
	StartGame();
}

function subtractThree() {
	let rollThreeText = document.getElementById("rollThreeText").value;
	let rollThree = parseInt(rollThreeText);
	disableDice++;

	if (rollThree > 0) {
		rollThree--;
		document.getElementById('rollThreeText').value = rollThree;
		//play audio
		var useDice = document.getElementById("myAudioUse");
		useDice.play();
		if (document.getElementById("tiltPicture").style.opacity == 1) {
			tiltCounter++;
			TiltCounter();
		}
		if (rollThree == 0) {
			document.getElementById("buttonThree").disabled = true;
		}
	}
	StartGame();
}

function subtractFour() {
	let rollFourText = document.getElementById("rollFourText").value;
	let rollFour = parseInt(rollFourText);
	disableDice++;

	if (rollFour > 0) {
		rollFour--;
		document.getElementById('rollFourText').value = rollFour;
		//play audio
		var useDice = document.getElementById("myAudioUse");
		useDice.play();
		if (document.getElementById("tiltPicture").style.opacity == 1) {
			tiltCounter++;
			TiltCounter();
		}
		if (rollFour == 0) {
			document.getElementById("buttonFour").disabled = true;
		}
	}
	StartGame();
}

function subtractFive() {
	let rollFiveText = document.getElementById("rollFiveText").value;
	let rollFive = parseInt(rollFiveText);
	disableDice++;

	if (rollFive > 0) {
		rollFive--;
		document.getElementById('rollFiveText').value = rollFive;
		//play audio
		var useDice = document.getElementById("myAudioUse");
		useDice.play();
		if (document.getElementById("tiltPicture").style.opacity == 1) {
			tiltCounter++;
			TiltCounter();
		}
		if (rollFive == 0) {
			document.getElementById("buttonFive").disabled = true;
		}
	}
	StartGame();
}

function subtractSix() {
	let rollSixText = document.getElementById("rollSixText").value;
	let rollSix = parseInt(rollSixText);
	disableDice++;

	if (rollSix > 0) {
		rollSix--;
		document.getElementById('rollSixText').value = rollSix;
		//play audio
		var useDice = document.getElementById("myAudioUse");
		useDice.play();
		if (document.getElementById("tiltPicture").style.opacity == 1) {
			tiltCounter++;
			TiltCounter();
		}
		if (rollSix == 0) {
			document.getElementById("buttonSix").disabled = true;
		}
	}
	StartGame();
}

function oneAccept() {
	if (document.getElementById('playerOne').value.length == 0) {
		document.getElementById('enterName').hidden = false;
	} else {
		document.getElementById('playerOne').disabled = true;
		document.getElementById('enterName').hidden = true;
		document.getElementById("playerOneAccept").style.visibility = "hidden";

		playerLockedCounter++;
		StartGame();
	}
}

function twoAccept() {
	if (document.getElementById('playerTwo').value.length == 0) {
		document.getElementById('enterName').hidden = false;
	} else {
		document.getElementById('playerTwo').disabled = true;
		document.getElementById('enterName').hidden = true;
		document.getElementById("playerTwoAccept").style.visibility = "hidden";

		playerLockedCounter++;
		StartGame();
	}
}

function threeAccept() {

	if (document.getElementById('playerThree').value.length == 0) {
		document.getElementById('enterName').hidden = false;
	} else {
		document.getElementById('playerThree').disabled = true;
		document.getElementById('enterName').hidden = true;
		document.getElementById("playerThreeAccept").style.visibility = "hidden";

		playerLockedCounter++;
		StartGame();
	}
}

function fourAccept() {

	if (document.getElementById('playerFour').value.length == 0) {
		document.getElementById('enterName').hidden = false;
	} else {
		document.getElementById('playerFour').disabled = true;
		document.getElementById("playerFourAccept").style.visibility = "hidden";
		document.getElementById('enterName').hidden = true;

		playerLockedCounter++;
		StartGame();
	}
}

function fiveAccept() {

	if (document.getElementById('playerFive').value.length == 0) {
		document.getElementById('enterName').hidden = false;
	} else {
		document.getElementById('playerFive').disabled = true;
		document.getElementById('enterName').hidden = true;
		document.getElementById("playerFiveAccept").style.visibility = "hidden";

		playerLockedCounter++;
		StartGame();
	}
}

//player 1 white and black die count

function oneSubtractBlack() {
	let blackDieRemaining = document.getElementById('playerOneBlackCount').value;


	if (blackDieRemaining > 0) {
		document.getElementById('blackDieText').value++;
		document.getElementById('playerOneBlackCount').value--;
	}

}

function oneAddBlack() {
	let blackDieRemaining = document.getElementById('blackDieText').value;

	if (blackDieRemaining > 0) {
		document.getElementById('playerOneBlackCount').value++;
		document.getElementById('blackDieText').value--;
		HalfWayPoint();
		EndGame();
	} else {
		//alert dice gone
		document.getElementById('blackDieRemain').hidden = false;
		setTimeout(function () {
			$('#blackDieRemain').fadeIn(0).delay(2000).fadeOut(2000);
		});
	}

}

function oneSubtractWhite() {
	let whiteDieRemaining = document.getElementById('playerOneWhiteCount').value;


	if (whiteDieRemaining > 0) {
		document.getElementById('whiteDieText').value++;
		document.getElementById('playerOneWhiteCount').value--;
	}

}

function oneAddWhite() {
	let whiteDieRemaining = document.getElementById('whiteDieText').value;

	if (whiteDieRemaining > 0) {
		document.getElementById('playerOneWhiteCount').value++;
		document.getElementById('whiteDieText').value--;
		HalfWayPoint();
		EndGame();
	} else {
		//alert dice gone
		document.getElementById('whiteDieRemain').hidden = false;
		setTimeout(function () {
			$('#whiteDieRemain').fadeIn(0).delay(2000).fadeOut(2000);
		});
	}

}

//player 2 white and black die count

function twoSubtractBlack() {
	let blackDieRemaining = document.getElementById('playerTwoBlackCount').value;


	if (blackDieRemaining > 0) {
		document.getElementById('blackDieText').value++;
		document.getElementById('playerTwoBlackCount').value--;
	}

}

function twoAddBlack() {
	let blackDieRemaining = document.getElementById('blackDieText').value;

	if (blackDieRemaining > 0) {
		document.getElementById('playerTwoBlackCount').value++;
		document.getElementById('blackDieText').value--;
		HalfWayPoint();
		EndGame();
	} else {
		//alert dice gone
		document.getElementById('blackDieRemain').hidden = false;
		setTimeout(function () {
			$('#blackDieRemain').fadeIn(0).delay(2000).fadeOut(2000);
		});
	}

}

function twoSubtractWhite() {
	let whiteDieRemaining = document.getElementById('playerTwoWhiteCount').value;


	if (whiteDieRemaining > 0) {
		document.getElementById('whiteDieText').value++;
		document.getElementById('playerTwoWhiteCount').value--;
	}

}

function twoAddWhite() {
	let whiteDieRemaining = document.getElementById('whiteDieText').value;

	if (whiteDieRemaining > 0) {
		document.getElementById('playerTwoWhiteCount').value++;
		document.getElementById('whiteDieText').value--;
		HalfWayPoint();
		EndGame();
	} else {
		//alert dice gone
		document.getElementById('whiteDieRemain').hidden = false;
		setTimeout(function () {
			$('#whiteDieRemain').fadeIn(0).delay(2000).fadeOut(2000);
		});
	}

}


//player 3 white and black die count

function threeSubtractBlack() {
	let blackDieRemaining = document.getElementById('playerThreeBlackCount').value;


	if (blackDieRemaining > 0) {
		document.getElementById('blackDieText').value++;
		document.getElementById('playerThreeBlackCount').value--;
	}

}

function threeAddBlack() {
	let blackDieRemaining = document.getElementById('blackDieText').value;

	if (blackDieRemaining > 0) {
		document.getElementById('playerThreeBlackCount').value++;
		document.getElementById('blackDieText').value--;
		HalfWayPoint();
		EndGame();
	} else {
		//alert dice gone
		document.getElementById('blackDieRemain').hidden = false;
		setTimeout(function () {
			$('#blackDieRemain').fadeIn(0).delay(2000).fadeOut(2000);
		});
	}

}

function threeSubtractWhite() {
	let whiteDieRemaining = document.getElementById('playerThreeWhiteCount').value;


	if (whiteDieRemaining > 0) {
		document.getElementById('whiteDieText').value++;
		document.getElementById('playerThreeWhiteCount').value--;
	}

}

function threeAddWhite() {
	let whiteDieRemaining = document.getElementById('whiteDieText').value;

	if (whiteDieRemaining > 0) {
		document.getElementById('playerThreeWhiteCount').value++;
		document.getElementById('whiteDieText').value--;
		HalfWayPoint();
		EndGame();
	} else {
		//alert dice gone
		document.getElementById('whiteDieRemain').hidden = false;
		setTimeout(function () {
			$('#whiteDieRemain').fadeIn(0).delay(2000).fadeOut(2000);
		});
	}

}

//player 4 white and black die count

function fourSubtractBlack() {
	let blackDieRemaining = document.getElementById('playerFourBlackCount').value;


	if (blackDieRemaining > 0) {
		document.getElementById('blackDieText').value++;
		document.getElementById('playerFourBlackCount').value--;
	}

}

function fourAddBlack() {
	let blackDieRemaining = document.getElementById('blackDieText').value;

	if (blackDieRemaining > 0) {
		document.getElementById('playerFourBlackCount').value++;
		document.getElementById('blackDieText').value--;
		HalfWayPoint();
		EndGame();
	} else {
		//alert dice gone
		document.getElementById('blackDieRemain').hidden = false;
		setTimeout(function () {
			$('#blackDieRemain').fadeIn(0).delay(2000).fadeOut(2000);
		});
	}

}

function fourSubtractWhite() {
	let whiteDieRemaining = document.getElementById('playerFourWhiteCount').value;


	if (whiteDieRemaining > 0) {
		document.getElementById('whiteDieText').value++;
		document.getElementById('playerFourWhiteCount').value--;
	}

}

function fourAddWhite() {
	let whiteDieRemaining = document.getElementById('whiteDieText').value;

	if (whiteDieRemaining > 0) {
		document.getElementById('playerFourWhiteCount').value++;
		document.getElementById('whiteDieText').value--;
		HalfWayPoint();
		EndGame();
	} else {
		//alert dice gone
		document.getElementById('whiteDieRemain').hidden = false;
		setTimeout(function () {
			$('#whiteDieRemain').fadeIn(0).delay(2000).fadeOut(2000);
		});
	}

}

//player 5 white and black die count

function fiveSubtractBlack() {
	let blackDieRemaining = document.getElementById('playerFiveBlackCount').value;


	if (blackDieRemaining > 0) {
		document.getElementById('blackDieText').value++;
		document.getElementById('playerFiveBlackCount').value--;
	}

}

function fiveAddBlack() {
	let blackDieRemaining = document.getElementById('blackDieText').value;

	if (blackDieRemaining > 0) {
		document.getElementById('playerFiveBlackCount').value++;
		document.getElementById('blackDieText').value--;
		HalfWayPoint();
		EndGame();
	} else {
		//alert dice gone
		document.getElementById('blackDieRemain').hidden = false;
		setTimeout(function () {
			$('#blackDieRemain').fadeIn(0).delay(2000).fadeOut(2000);
		});
	}

}

function fiveSubtractWhite() {
	let whiteDieRemaining = document.getElementById('playerFiveWhiteCount').value;


	if (whiteDieRemaining > 0) {
		document.getElementById('whiteDieText').value++;
		document.getElementById('playerFiveWhiteCount').value--;
	}

}

function fiveAddWhite() {
	let whiteDieRemaining = document.getElementById('whiteDieText').value;

	if (whiteDieRemaining > 0) {
		document.getElementById('playerFiveWhiteCount').value++;
		document.getElementById('whiteDieText').value--;
		HalfWayPoint();
		EndGame();
	} else {
		//alert dice gone
		document.getElementById('whiteDieRemain').hidden = false;
		setTimeout(function () {
			$('#whiteDieRemain').fadeIn(0).delay(2000).fadeOut(2000);
		});
	}

}

function HalfWayPoint() {

	let blackDieRemainingHalfway = parseInt(document.getElementById('blackDieText').value);
	let whiteDieRemainingHalfway = parseInt(document.getElementById('whiteDieText').value);

	let halfwayTotal = blackDieRemainingHalfway + whiteDieRemainingHalfway;
	let halfWayPoint = parseInt(document.getElementById("halfWayChecker").value);
	if (document.getElementById("actOnePicture").style.opacity == 1) {
		if (halfwayTotal == halfWayPoint) {

			//alert tilt begins!
			document.getElementById('startTilt').hidden = false;
			setTimeout(function () {
				$('#startTilt').fadeIn(0).delay(8000).fadeOut(8000);
			});

			//move progress bar
			document.getElementById('progressBar').style.width = "47.8%";

			document.getElementById("actOnePicture").style.opacity = 0.3;
			document.getElementById("tiltPicture").style.opacity = 1;
			//move progress bar

			//unlock/clear dice roll
			DoTheRolls();

			//clear original roll and rest for tilt
			document.getElementById("diceRolling").style.pointerEvents = "auto";
			document.getElementById("diceRolling").style.opacity = 1;
			document.getElementById("rollButton").disabled = false;
			document.getElementById("rollResult").value = "";
			document.getElementById("rollOneText").value = "";
			document.getElementById("rollTwoText").value = "";
			document.getElementById("rollThreeText").value = "";
			document.getElementById("rollFourText").value = "";
			document.getElementById("rollFiveText").value = "";
			document.getElementById("rollSixText").value = "";
		}
	}
}

function StartGame() {
	let playerAmount = parseInt(document.getElementById("players").value);
	let diceCount = parseInt(document.getElementById("halfWayChecker").value);

	if ((playerAmount == playerLockedCounter) && (disableDice == diceCount)) {
		document.getElementById("setUpPicture").style.opacity = 0.3;
		document.getElementById("actOnePicture").style.opacity = 1;

		//disable dice card
		document.getElementById("diceRolling").disabled = true;
		document.getElementById("diceRolling").style.opacity = 0.4;

		//alert act 1 begins!
		document.getElementById('startActOne').hidden = false;
		setTimeout(function () {
			$('#startActOne').fadeIn(0).delay(5000).fadeOut(5000);
		});

		//move progress bar
		document.getElementById('progressBar').style.width = "25.5%";

		//unlock +/- buttons		
		if (playerAmount == 3) {
			//player 1
			document.getElementById("playerOneSubtractBlack").disabled = false;
			document.getElementById("playerOneAddBlack").disabled = false;
			document.getElementById("playerOneSubtractWhite").disabled = false;
			document.getElementById("playerOneAddWhite").disabled = false;
			//player 2
			document.getElementById("playerTwoSubtractBlack").disabled = false;
			document.getElementById("playerTwoAddBlack").disabled = false;
			document.getElementById("playerTwoSubtractWhite").disabled = false;
			document.getElementById("playerTwoAddWhite").disabled = false;
			//player 3
			document.getElementById("playerThreeSubtractBlack").disabled = false;
			document.getElementById("playerThreeAddBlack").disabled = false;
			document.getElementById("playerThreeSubtractWhite").disabled = false;
			document.getElementById("playerThreeAddWhite").disabled = false;
		} else if (playerAmount == 4) {
			//player 1
			document.getElementById("playerOneSubtractBlack").disabled = false;
			document.getElementById("playerOneAddBlack").disabled = false;
			document.getElementById("playerOneSubtractWhite").disabled = false;
			document.getElementById("playerOneAddWhite").disabled = false;
			//player 2
			document.getElementById("playerTwoSubtractBlack").disabled = false;
			document.getElementById("playerTwoAddBlack").disabled = false;
			document.getElementById("playerTwoSubtractWhite").disabled = false;
			document.getElementById("playerTwoAddWhite").disabled = false;
			//player 3
			document.getElementById("playerThreeSubtractBlack").disabled = false;
			document.getElementById("playerThreeAddBlack").disabled = false;
			document.getElementById("playerThreeSubtractWhite").disabled = false;
			document.getElementById("playerThreeAddWhite").disabled = false;
			//player 4
			document.getElementById("playerFourSubtractBlack").disabled = false;
			document.getElementById("playerFourAddBlack").disabled = false;
			document.getElementById("playerFourSubtractWhite").disabled = false;
			document.getElementById("playerFourAddWhite").disabled = false;
		} else {
			//player 1
			document.getElementById("playerOneSubtractBlack").disabled = false;
			document.getElementById("playerOneAddBlack").disabled = false;
			document.getElementById("playerOneSubtractWhite").disabled = false;
			document.getElementById("playerOneAddWhite").disabled = false;
			//player 2
			document.getElementById("playerTwoSubtractBlack").disabled = false;
			document.getElementById("playerTwoAddBlack").disabled = false;
			document.getElementById("playerTwoSubtractWhite").disabled = false;
			document.getElementById("playerTwoAddWhite").disabled = false;
			//player 3
			document.getElementById("playerThreeSubtractBlack").disabled = false;
			document.getElementById("playerThreeAddBlack").disabled = false;
			document.getElementById("playerThreeSubtractWhite").disabled = false;
			document.getElementById("playerThreeAddWhite").disabled = false;
			//player 4
			document.getElementById("playerFourSubtractBlack").disabled = false;
			document.getElementById("playerFourAddBlack").disabled = false;
			document.getElementById("playerFourSubtractWhite").disabled = false;
			document.getElementById("playerFourAddWhite").disabled = false;
			//player 5
			document.getElementById("playerFiveSubtractBlack").disabled = false;
			document.getElementById("playerFiveAddBlack").disabled = false;
			document.getElementById("playerFiveSubtractWhite").disabled = false;
			document.getElementById("playerFiveAddWhite").disabled = false;
		}
	}
}

function TiltCounter() {

	if (tiltCounter == 2) {

		//alert tilt begins!
		document.getElementById('startActTwo').hidden = false;
		setTimeout(function () {
			$('#startActTwo').fadeIn(0).delay(5000).fadeOut(5000);
		});

		//move progress bar
		document.getElementById("tiltPicture").style.opacity = 0.3;
		document.getElementById("actTwoPicture").style.opacity = 1;
		document.getElementById('progressBar').style.width = "70%";

		//disable dice rolling		
		document.getElementById("diceRolling").style.pointerEvents = "none";
		document.getElementById("diceRolling").style.opacity = 0.3;

		let playerAmountHalf = parseInt(document.getElementById("players").value);

		switch (playerAmountHalf) {
			case 3:

				//player 1
				document.getElementById("playerOneSubtractBlack").disabled = false;
				document.getElementById("playerOneAddBlack").disabled = false;
				document.getElementById("playerOneSubtractWhite").disabled = false;
				document.getElementById("playerOneAddWhite").disabled = false;
				document.getElementById("playerOneWhiteRoll").value = "...";
				document.getElementById("playerOneBlackRoll").value = "...";
				document.getElementById("playerOneResult").value = "...";
				document.getElementById("playerOneWhiteRoll").title = "...";
				document.getElementById("playerOneBlackRoll").title = "...";

				//player 2
				document.getElementById("playerTwoSubtractBlack").disabled = false;
				document.getElementById("playerTwoAddBlack").disabled = false;
				document.getElementById("playerTwoSubtractWhite").disabled = false;
				document.getElementById("playerTwoAddWhite").disabled = false;
				document.getElementById("playerTwoWhiteRoll").value = "...";
				document.getElementById("playerTwoBlackRoll").value = "...";
				document.getElementById("playerTwoResult").value = "...";
				document.getElementById("playerTwoWhiteRoll").title = "...";
				document.getElementById("playerTwoBlackRoll").title = "...";


				//player 3
				document.getElementById("playerThreeSubtractBlack").disabled = false;
				document.getElementById("playerThreeAddBlack").disabled = false;
				document.getElementById("playerThreeSubtractWhite").disabled = false;
				document.getElementById("playerThreeAddWhite").disabled = false;
				document.getElementById("playerThreeWhiteRoll").value = "...";
				document.getElementById("playerThreeBlackRoll").value = "...";
				document.getElementById("playerThreeResult").value = "...";
				document.getElementById("playerThreeWhiteRoll").title = "...";
				document.getElementById("playerThreeBlackRoll").title = "...";

				break;

			case 4:

				//player 1
				document.getElementById("playerOneSubtractBlack").disabled = false;
				document.getElementById("playerOneAddBlack").disabled = false;
				document.getElementById("playerOneSubtractWhite").disabled = false;
				document.getElementById("playerOneAddWhite").disabled = false;
				document.getElementById("playerOneWhiteRoll").value = "...";
				document.getElementById("playerOneBlackRoll").value = "...";
				document.getElementById("playerOneResult").value = "...";
				document.getElementById("playerOneWhiteRoll").title = "...";
				document.getElementById("playerOneBlackRoll").title = "...";

				//player 2
				document.getElementById("playerTwoSubtractBlack").disabled = false;
				document.getElementById("playerTwoAddBlack").disabled = false;
				document.getElementById("playerTwoSubtractWhite").disabled = false;
				document.getElementById("playerTwoAddWhite").disabled = false;
				document.getElementById("playerTwoWhiteRoll").value = "...";
				document.getElementById("playerTwoBlackRoll").value = "...";
				document.getElementById("playerTwoResult").value = "...";
				document.getElementById("playerTwoWhiteRoll").title = "...";
				document.getElementById("playerTwoBlackRoll").title = "...";

				//player 3
				document.getElementById("playerThreeSubtractBlack").disabled = false;
				document.getElementById("playerThreeAddBlack").disabled = false;
				document.getElementById("playerThreeSubtractWhite").disabled = false;
				document.getElementById("playerThreeAddWhite").disabled = false;
				document.getElementById("playerThreeWhiteRoll").value = "...";
				document.getElementById("playerThreeBlackRoll").value = "...";
				document.getElementById("playerThreeResult").value = "...";
				document.getElementById("playerThreeWhiteRoll").title = "...";
				document.getElementById("playerThreeBlackRoll").title = "...";

				//player 4
				document.getElementById("playerFourSubtractBlack").disabled = false;
				document.getElementById("playerFourAddBlack").disabled = false;
				document.getElementById("playerFourSubtractWhite").disabled = false;
				document.getElementById("playerFourAddWhite").disabled = false;
				document.getElementById("playerFourWhiteRoll").value = "...";
				document.getElementById("playerFourBlackRoll").value = "...";
				document.getElementById("playerFourResult").value = "...";
				document.getElementById("playerFourWhiteRoll").title = "...";
				document.getElementById("playerFourBlackRoll").title = "...";

				break;

			case 5:

				//player 1
				document.getElementById("playerOneSubtractBlack").disabled = false;
				document.getElementById("playerOneAddBlack").disabled = false;
				document.getElementById("playerOneSubtractWhite").disabled = false;
				document.getElementById("playerOneAddWhite").disabled = false;
				document.getElementById("playerOneWhiteRoll").value = "...";
				document.getElementById("playerOneBlackRoll").value = "...";
				document.getElementById("playerOneResult").value = "...";
				document.getElementById("playerOneWhiteRoll").title = "...";
				document.getElementById("playerOneBlackRoll").title = "...";

				//player 2
				document.getElementById("playerTwoSubtractBlack").disabled = false;
				document.getElementById("playerTwoAddBlack").disabled = false;
				document.getElementById("playerTwoSubtractWhite").disabled = false;
				document.getElementById("playerTwoAddWhite").disabled = false;
				document.getElementById("playerTwoWhiteRoll").value = "...";
				document.getElementById("playerTwoBlackRoll").value = "...";
				document.getElementById("playerTwoResult").value = "...";
				document.getElementById("playerTwoWhiteRoll").title = "...";
				document.getElementById("playerTwoBlackRoll").title = "...";


				//player 3
				document.getElementById("playerThreeSubtractBlack").disabled = false;
				document.getElementById("playerThreeAddBlack").disabled = false;
				document.getElementById("playerThreeSubtractWhite").disabled = false;
				document.getElementById("playerThreeAddWhite").disabled = false;
				document.getElementById("playerThreeWhiteRoll").value = "...";
				document.getElementById("playerThreeBlackRoll").value = "...";
				document.getElementById("playerThreeResult").value = "...";
				document.getElementById("playerThreeWhiteRoll").title = "...";
				document.getElementById("playerThreeBlackRoll").title = "...";

				//player 4
				document.getElementById("playerFourSubtractBlack").disabled = false;
				document.getElementById("playerFourAddBlack").disabled = false;
				document.getElementById("playerFourSubtractWhite").disabled = false;
				document.getElementById("playerFourAddWhite").disabled = false;
				document.getElementById("playerFourWhiteRoll").value = "...";
				document.getElementById("playerFourBlackRoll").value = "...";
				document.getElementById("playerFourResult").value = "...";
				document.getElementById("playerFourWhiteRoll").title = "...";
				document.getElementById("playerFourBlackRoll").title = "...";

				//player 5
				document.getElementById("playerFiveSubtractBlack").disabled = false;
				document.getElementById("playerFiveAddBlack").disabled = false;
				document.getElementById("playerFiveSubtractWhite").disabled = false;
				document.getElementById("playerFiveAddWhite").disabled = false;
				document.getElementById("playerFiveWhiteRoll").value = "...";
				document.getElementById("playerFiveBlackRoll").value = "...";
				document.getElementById("playerFiveResult").value = "...";
				document.getElementById("playerFiveWhiteRoll").title = "...";
				document.getElementById("playerFiveBlackRoll").title = "...";

				break;

			default:

				console.log('whoops!');

		}
	}
}

function EndGame() {

	let whiteDieRemaining = document.getElementById('whiteDieText').value;
	let blackDieRemaining = document.getElementById('blackDieText').value;

	if (whiteDieRemaining + blackDieRemaining == 0) {

		DoTheRolls();
		//move progress bar
		document.getElementById('progressBar').style.width = "100%";

		document.getElementById("actTwoPicture").style.opacity = 0.3;
		document.getElementById("aftermathPicture").style.opacity = 1;
		//alert dice gone
		document.getElementById('aftermath').hidden = false;
		setTimeout(function () {
			$('#aftermath').fadeIn(0).delay(8000).fadeOut(8000);
		});
	}
}

function DoTheRolls() {

	let playerAmountHalf = parseInt(document.getElementById("players").value);

	switch (playerAmountHalf) {
		case 3:

			//disable -/+ buttons
			//player 1
			document.getElementById("playerOneSubtractBlack").disabled = true;
			document.getElementById("playerOneAddBlack").disabled = true;
			document.getElementById("playerOneBlackCount").disabled = true;
			document.getElementById("playerOneSubtractWhite").disabled = true;
			document.getElementById("playerOneAddWhite").disabled = true;
			document.getElementById("playerOneWhiteCount").disabled = true;

			//player 2
			document.getElementById("playerTwoSubtractBlack").disabled = true;
			document.getElementById("playerTwoAddBlack").disabled = true;
			document.getElementById("playerTwoBlackCount").disabled = true;
			document.getElementById("playerTwoSubtractWhite").disabled = true;
			document.getElementById("playerTwoAddWhite").disabled = true;
			document.getElementById("playerTwoWhiteCount").disabled = true;

			//player 3
			document.getElementById("playerThreeSubtractBlack").disabled = true;
			document.getElementById("playerThreeAddBlack").disabled = true;
			document.getElementById("playerThreeBlackCount").disabled = true;
			document.getElementById("playerThreeSubtractWhite").disabled = true;
			document.getElementById("playerThreeAddWhite").disabled = true;
			document.getElementById("playerThreeWhiteCount").disabled = true;

			break;

		case 4:

			//disable -/+ buttons
			//player 1
			document.getElementById("playerOneSubtractBlack").disabled = true;
			document.getElementById("playerOneAddBlack").disabled = true;
			document.getElementById("playerOneBlackCount").disabled = true;
			document.getElementById("playerOneSubtractWhite").disabled = true;
			document.getElementById("playerOneAddWhite").disabled = true;
			document.getElementById("playerOneWhiteCount").disabled = true;

			//player 2
			document.getElementById("playerTwoSubtractBlack").disabled = true;
			document.getElementById("playerTwoAddBlack").disabled = true;
			document.getElementById("playerTwoBlackCount").disabled = true;
			document.getElementById("playerTwoSubtractWhite").disabled = true;
			document.getElementById("playerTwoAddWhite").disabled = true;
			document.getElementById("playerTwoWhiteCount").disabled = true;

			//player 3
			document.getElementById("playerThreeSubtractBlack").disabled = true;
			document.getElementById("playerThreeAddBlack").disabled = true;
			document.getElementById("playerThreeBlackCount").disabled = true;
			document.getElementById("playerThreeSubtractWhite").disabled = true;
			document.getElementById("playerThreeAddWhite").disabled = true;
			document.getElementById("playerThreeWhiteCount").disabled = true;

			//player 4
			document.getElementById("playerFourSubtractBlack").disabled = true;
			document.getElementById("playerFourAddBlack").disabled = true;
			document.getElementById("playerFourBlackCount").disabled = true;
			document.getElementById("playerFourSubtractWhite").disabled = true;
			document.getElementById("playerFourAddWhite").disabled = true;
			document.getElementById("playerFourWhiteCount").disabled = true;


			break;

		case 5:

			//disable -/+ buttons
			//player 1
			document.getElementById("playerOneSubtractBlack").disabled = true;
			document.getElementById("playerOneAddBlack").disabled = true;
			document.getElementById("playerOneBlackCount").disabled = true;
			document.getElementById("playerOneSubtractWhite").disabled = true;
			document.getElementById("playerOneAddWhite").disabled = true;
			document.getElementById("playerOneWhiteCount").disabled = true;

			//player 2
			document.getElementById("playerTwoSubtractBlack").disabled = true;
			document.getElementById("playerTwoAddBlack").disabled = true;
			document.getElementById("playerTwoBlackCount").disabled = true;
			document.getElementById("playerTwoSubtractWhite").disabled = true;
			document.getElementById("playerTwoAddWhite").disabled = true;
			document.getElementById("playerTwoWhiteCount").disabled = true;

			//player 3
			document.getElementById("playerThreeSubtractBlack").disabled = true;
			document.getElementById("playerThreeAddBlack").disabled = true;
			document.getElementById("playerThreeBlackCount").disabled = true;
			document.getElementById("playerThreeSubtractWhite").disabled = true;
			document.getElementById("playerThreeAddWhite").disabled = true;
			document.getElementById("playerThreeWhiteCount").disabled = true;

			//player 4
			document.getElementById("playerFourSubtractBlack").disabled = true;
			document.getElementById("playerFourAddBlack").disabled = true;
			document.getElementById("playerFourBlackCount").disabled = true;
			document.getElementById("playerFourSubtractWhite").disabled = true;
			document.getElementById("playerFourAddWhite").disabled = true;
			document.getElementById("playerFourWhiteCount").disabled = true;

			//player 5
			document.getElementById("playerFiveSubtractBlack").disabled = true;
			document.getElementById("playerFiveAddBlack").disabled = true;
			document.getElementById("playerFiveBlackCount").disabled = true;
			document.getElementById("playerFiveSubtractWhite").disabled = true;
			document.getElementById("playerFiveAddWhite").disabled = true;
			document.getElementById("playerFiveWhiteCount").disabled = true;

			break;

		default:

			console.log('whoops!');
	}


	//fill white and black dice results based on textbox values
	//player 1
	let playerOneWhite = document.getElementById("playerOneWhiteCount").value;
	let playerOneBlack = document.getElementById("playerOneBlackCount").value;

	//white				
	let playerOneWhiteRoll = Array.from({
		length: playerOneWhite
	}, () => Math.floor(Math.random() * 6) + 1);
	console.log(playerOneWhiteRoll);
	var playerOneWhiteSum = playerOneWhiteRoll.reduce(function (a, b) {
		return a + b;
	}, 0);

	document.getElementById("playerOneWhiteRoll").value = playerOneWhiteSum;
	document.getElementById("playerOneWhiteRoll").title = playerOneWhiteRoll;
	console.log(playerOneWhiteSum);

	//black			
	let playerOneBlackRoll = Array.from({
		length: playerOneBlack
	}, () => Math.floor(Math.random() * 6) + 1);
	console.log(playerOneBlackRoll);
	var playerOneBlackSum = playerOneBlackRoll.reduce(function (a, b) {
		return a + b;
	}, 0);

	document.getElementById("playerOneBlackRoll").value = playerOneBlackSum;
	document.getElementById("playerOneBlackRoll").title = playerOneBlackRoll;
	console.log(playerOneBlackSum);

	//find out which is higher, white or black
	let whiteDiceResultOne = parseInt(document.getElementById("playerOneWhiteRoll").value);
	let blackDiceResultOne = parseInt(document.getElementById("playerOneBlackRoll").value);
	let resultOneA = whiteDiceResultOne - blackDiceResultOne;
	let resultOneB = blackDiceResultOne - whiteDiceResultOne;

	if (whiteDiceResultOne > blackDiceResultOne) {
		document.getElementById("playerOneResult").value = `White ${resultOneA}`;
		console.log("White");
	} else {
		document.getElementById("playerOneResult").value = `Black ${resultOneB}`;
		console.log("Black");
	}

	//fill white and black dice results based on textbox values
	//player 2
	let playerTwoWhite = document.getElementById("playerTwoWhiteCount").value;
	let playerTwoBlack = document.getElementById("playerTwoBlackCount").value;

	//white				
	let playerTwoWhiteRoll = Array.from({
		length: playerTwoWhite
	}, () => Math.floor(Math.random() * 6) + 1);
	console.log(playerTwoWhiteRoll);
	var playerTwoWhiteSum = playerTwoWhiteRoll.reduce(function (a, b) {
		return a + b;
	}, 0);

	document.getElementById("playerTwoWhiteRoll").value = playerTwoWhiteSum;
	document.getElementById("playerTwoWhiteRoll").title = playerTwoWhiteRoll;
	console.log(playerTwoWhiteSum);

	//black			
	let playerTwoBlackRoll = Array.from({
		length: playerTwoBlack
	}, () => Math.floor(Math.random() * 6) + 1);
	console.log(playerTwoBlackRoll);
	var playerTwoBlackSum = playerTwoBlackRoll.reduce(function (a, b) {
		return a + b;
	}, 0);

	document.getElementById("playerTwoBlackRoll").value = playerTwoBlackSum;
	document.getElementById("playerTwoBlackRoll").title = playerTwoBlackRoll;
	console.log(playerTwoBlackSum);

	//find out which is higher, white or black
	let whiteDiceResultTwo = parseInt(document.getElementById("playerTwoWhiteRoll").value);
	let blackDiceResultTwo = parseInt(document.getElementById("playerTwoBlackRoll").value);
	let resultTwoA = whiteDiceResultTwo - blackDiceResultTwo;
	let resultTwoB = blackDiceResultTwo - whiteDiceResultTwo;

	if (whiteDiceResultTwo > blackDiceResultTwo) {
		document.getElementById("playerTwoResult").value = `White ${resultTwoA}`;
		console.log("White");
	} else {
		document.getElementById("playerTwoResult").value = `Black ${resultTwoB}`;
		console.log("Black");
	}

	//fill white and black dice results based on textbox values
	//player 3
	let playerThreeWhite = document.getElementById("playerThreeWhiteCount").value;
	let playerThreeBlack = document.getElementById("playerThreeBlackCount").value;

	//white				
	let playerThreeWhiteRoll = Array.from({
		length: playerThreeWhite
	}, () => Math.floor(Math.random() * 6) + 1);
	console.log(playerThreeWhiteRoll);
	var playerThreeWhiteSum = playerThreeWhiteRoll.reduce(function (a, b) {
		return a + b;
	}, 0);

	document.getElementById("playerThreeWhiteRoll").value = playerThreeWhiteSum;
	document.getElementById("playerThreeWhiteRoll").title = playerThreeWhiteRoll;
	console.log(playerThreeWhiteSum);

	//black			
	let playerThreeBlackRoll = Array.from({
		length: playerThreeBlack
	}, () => Math.floor(Math.random() * 6) + 1);
	console.log(playerThreeBlackRoll);
	var playerThreeBlackSum = playerThreeBlackRoll.reduce(function (a, b) {
		return a + b;
	}, 0);

	document.getElementById("playerThreeBlackRoll").value = playerThreeBlackSum;
	document.getElementById("playerThreeBlackRoll").title = playerThreeBlackRoll;
	console.log(playerThreeBlackSum);

	//find out which is higher, white or black
	let whiteDiceResultThree = parseInt(document.getElementById("playerThreeWhiteRoll").value);
	let blackDiceResultThree = parseInt(document.getElementById("playerThreeBlackRoll").value);
	let resultThreeA = whiteDiceResultThree - blackDiceResultThree;
	let resultThreeB = blackDiceResultThree - whiteDiceResultThree;

	if (whiteDiceResultThree > blackDiceResultThree) {
		document.getElementById("playerThreeResult").value = `White ${resultThreeA}`;
		console.log("White");
	} else {
		document.getElementById("playerThreeResult").value = `Black ${resultThreeB}`;
		console.log("Black");
	}

	if (playerAmountHalf == 4) {

		//fill white and black dice results based on textbox values
		//player 4
		let playerFourWhite = document.getElementById("playerFourWhiteCount").value;
		let playerFourBlack = document.getElementById("playerFourBlackCount").value;

		//white				
		let playerFourWhiteRoll = Array.from({
			length: playerFourWhite
		}, () => Math.floor(Math.random() * 6) + 1);
		console.log(playerFourWhiteRoll);
		var playerFourWhiteSum = playerFourWhiteRoll.reduce(function (a, b) {
			return a + b;
		}, 0);

		document.getElementById("playerFourWhiteRoll").value = playerFourWhiteSum;
		document.getElementById("playerFourWhiteRoll").title = playerFourWhiteRoll;
		console.log(playerFourWhiteSum);

		//black			
		let playerFourBlackRoll = Array.from({
			length: playerFourBlack
		}, () => Math.floor(Math.random() * 6) + 1);
		console.log(playerFourBlackRoll);
		var playerFourBlackSum = playerFourBlackRoll.reduce(function (a, b) {
			return a + b;
		}, 0);

		document.getElementById("playerFourBlackRoll").value = playerFourBlackSum;
		document.getElementById("playerFourBlackRoll").title = playerFourBlackRoll;
		console.log(playerFourBlackSum);

		//find out which is higher, white or black
		let whiteDiceResultFour = parseInt(document.getElementById("playerFourWhiteRoll").value);
		let blackDiceResultFour = parseInt(document.getElementById("playerFourBlackRoll").value);
		let resultFourA = whiteDiceResultFour - blackDiceResultFour;
		let resultFourB = blackDiceResultFour - whiteDiceResultFour;

		if (whiteDiceResultFour > blackDiceResultFour) {
			document.getElementById("playerFourResult").value = `White ${resultFourA}`;
			console.log("White");
		} else {
			document.getElementById("playerFourResult").value = `Black ${resultFourB}`;
			console.log("Black");
		}
	}

	if (playerAmountHalf == 5) {

		//fill white and black dice results based on textbox values
		//player 4
		let playerFourWhite = document.getElementById("playerFourWhiteCount").value;
		let playerFourBlack = document.getElementById("playerFourBlackCount").value;

		//white				
		let playerFourWhiteRoll = Array.from({
			length: playerFourWhite
		}, () => Math.floor(Math.random() * 6) + 1);
		console.log(playerFourWhiteRoll);
		var playerFourWhiteSum = playerFourWhiteRoll.reduce(function (a, b) {
			return a + b;
		}, 0);

		document.getElementById("playerFourWhiteRoll").value = playerFourWhiteSum;
		document.getElementById("playerFourWhiteRoll").title = playerFourWhiteRoll;
		console.log(playerFourWhiteSum);

		//black			
		let playerFourBlackRoll = Array.from({
			length: playerFourBlack
		}, () => Math.floor(Math.random() * 6) + 1);
		console.log(playerFourBlackRoll);
		var playerFourBlackSum = playerFourBlackRoll.reduce(function (a, b) {
			return a + b;
		}, 0);

		document.getElementById("playerFourBlackRoll").value = playerFourBlackSum;
		document.getElementById("playerFourBlackRoll").title = playerFourBlackRoll;
		console.log(playerFourBlackSum);

		//find out which is higher, white or black
		let whiteDiceResultFour = parseInt(document.getElementById("playerFourWhiteRoll").value);
		let blackDiceResultFour = parseInt(document.getElementById("playerFourBlackRoll").value);
		let resultFourA = whiteDiceResultFour - blackDiceResultFour;
		let resultFourB = blackDiceResultFour - whiteDiceResultFour;

		if (whiteDiceResultFour > blackDiceResultFour) {
			document.getElementById("playerFourResult").value = `White ${resultFourA}`;
			console.log("White");
		} else {
			document.getElementById("playerFourResult").value = `Black ${resultFourB}`;
			console.log("Black");
		}

		//fill white and black dice results based on textbox values
		//player 5
		let playerFiveWhite = document.getElementById("playerFiveWhiteCount").value;
		let playerFiveBlack = document.getElementById("playerFiveBlackCount").value;

		//white				
		let playerFiveWhiteRoll = Array.from({
			length: playerFiveWhite
		}, () => Math.floor(Math.random() * 6) + 1);
		console.log(playerFiveWhiteRoll);
		var playerFiveWhiteSum = playerFiveWhiteRoll.reduce(function (a, b) {
			return a + b;
		}, 0);

		document.getElementById("playerFiveWhiteRoll").value = playerFiveWhiteSum;
		document.getElementById("playerFiveWhiteRoll").title = playerFiveWhiteRoll;
		console.log(playerFiveWhiteSum);

		//black			
		let playerFiveBlackRoll = Array.from({
			length: playerFiveBlack
		}, () => Math.floor(Math.random() * 6) + 1);
		console.log(playerFiveBlackRoll);
		var playerFiveBlackSum = playerFiveBlackRoll.reduce(function (a, b) {
			return a + b;
		}, 0);

		document.getElementById("playerFiveBlackRoll").value = playerFiveBlackSum;
		document.getElementById("playerFiveBlackRoll").title = playerFiveBlackRoll;
		console.log(playerFiveBlackSum);

		//find out which is higher, white or black
		let whiteDiceResultFive = parseInt(document.getElementById("playerFiveWhiteRoll").value);
		let blackDiceResultFive = parseInt(document.getElementById("playerFiveBlackRoll").value);
		let resultFiveA = whiteDiceResultFive - blackDiceResultFive;
		let resultFiveB = blackDiceResultFive - whiteDiceResultFive;

		if (whiteDiceResultFive > blackDiceResultFive) {
			document.getElementById("playerFiveResult").value = `White ${resultFiveA}`;
			console.log("White");
		} else {
			document.getElementById("playerFiveResult").value = `Black ${resultFiveB}`;
			console.log("Black");
		}

	}
}