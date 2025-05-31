import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils.js";

function GuessTracer({ itemList, answer }) {

	return (
		<div className="guess-results">
			{range(NUM_OF_GUESSES_ALLOWED).map((num) => {
				return (
					<Guess
						className="guess"
						key={num}
						word={itemList[num]?.label || ""}
						answer={answer}
					/>
				);
			})}
		</div>
	);
}

export default GuessTracer;
