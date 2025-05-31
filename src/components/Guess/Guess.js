import React from "react";
import { range } from "../../utils.js";
import { checkGuess } from "../../game-helpers.js";

function Guess({ word, answer }) {
	const statusArr = checkGuess(word, answer);

	return (
		<p className="guess">
			{range(5).map((num) => (
				<span key={num} className={`cell ${word && statusArr[num].status}`}>
					{word ? word[num] : undefined}
				</span>
			))}
		</p>
	);
}

export default Guess;
