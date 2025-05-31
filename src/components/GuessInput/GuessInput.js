import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { checkGuess } from "../../game-helpers.js";

function GuessInput({ setItemList, answer }) {
	const [input, setInput] = React.useState(""); //just for the input
	const [won, setWon] = React.useState(false);
	const [rounds, setRounds] = React.useState(0);
	const nextRound = rounds + 1;

	const lost = nextRound > NUM_OF_GUESSES_ALLOWED;

	let inputField = (
		<form className="guess-input-wrapper" onSubmit={(e) => submitter(e)}>
			<input
				type="text"
				required
				pattern="[A-Z]{5}"
				value={input}
				disabled={rounds === NUM_OF_GUESSES_ALLOWED}
				onChange={(e) =>
					setInput(e.target.value.toUpperCase().trim().slice(0, 5))
				}
			/>
		</form>
	);

	const happyBanner = (
		<div className="happy banner">
			<p>
				<strong>Congratulations!</strong> Got it in
				<strong>{rounds} guesses</strong>.
			</p>
		</div>
	);

	const sadBanner = (
		<div className="sad banner">
			<p>
				Sorry, the correct answer is <strong>{answer}</strong>.
			</p>
		</div>
	);
	const submitter = (e) => {
		e.preventDefault();
		setItemList(input);
		setInput("");
		setRounds(nextRound);
		console.log(checkGuess(input, answer));
		console.log(
			checkGuess(input, answer).every((object) => object.status === "correct")
		);
		setWon(input === answer);
		console.log(won);
	};
	console.log(`this is printed outside and the won value is${won}`);
	if (won) {
		console.log(happyBanner);
		return happyBanner;
	}
	if (lost) {
		return sadBanner;
	} else {
		return inputField;
	}
}

export default GuessInput;
