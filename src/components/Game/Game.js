import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessTracer from "../GuessTracer";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [itemList, setItemList] = React.useState([]);
  const [win, setWin] = React.useState(false)

	const submitHandler = (newItem) => {
		const newArr = [...itemList];
		newArr.push({ label: newItem, id: crypto.randomUUID() });
		setItemList(newArr);
	};

	return (
		<>
			<GuessTracer itemList={itemList} answer={answer} />
			<GuessInput setItemList={submitHandler} answer={answer} win={win} setWin={setWin} />
		</>
	);
}

export default Game;
