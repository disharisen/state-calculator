"use client";

import { useState } from "react";
import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";

const BasicCalculator = () => {
	const [inputOne, setInputOne] = useState("");
	const [inputTwo, setInputTwo] = useState("");
	const [inputTotal, setInputTotal] = useState("");

	const handleAdd = () => {
		const numberOne = parseInt(inputOne);
		const numberTwo = parseInt(inputTwo);

		const total = numberOne + numberTwo;

		setInputTotal(total.toString());

		setInputOne("");
		setInputTwo("");
	};

	const handleMinus = () => {
		const numberOne = parseInt(inputOne);
		const numberTwo = parseInt(inputTwo);

		const total = numberOne - numberTwo;

		setInputTotal(total.toString());

		setInputOne("");
		setInputTwo("");
	};

	const handleMultiply = () => {
		const numberOne = parseInt(inputOne);
		const numberTwo = parseInt(inputTwo);

		const total = numberOne * numberTwo;

		setInputTotal(total.toString());

		setInputOne("");
		setInputTwo("");
	};

	const handleDivide = () => {
		const numberOne = parseInt(inputOne);
		const numberTwo = parseInt(inputTwo);

		const total = numberOne / numberTwo;

		setInputTotal(total.toString());

		setInputOne("");
		setInputTwo("");
	};

	const handleReset = () => {
		setInputOne("");
		setInputTwo("");
		setInputTotal("");
	};

	return (
		<div className="grid grid-cols-4 gap-8">
			<Input
				type="number"
				className="col-span-2"
				placeholder="Number 1"
				onChange={({ target }) => setInputOne(target.value)}
				value={inputOne}
			/>
			<Input
				type="number"
				className="col-span-2"
				placeholder="Number 2"
				onChange={({ target }) => setInputTwo(target.value)}
				value={inputTwo}
			/>
			<Input
				type="number"
				className="col-span-4"
				placeholder="Total"
				disabled
				onChange={({ target }) => setInputTotal(target.value)}
				value={inputTotal}
			/>

			<Button
				className="col-span-1 cursor-pointer"
				disabled={inputOne === "" || inputTwo === ""}
				onClick={handleAdd}>
				Add
			</Button>
			<Button
				className="col-span-1 cursor-pointer"
				disabled={inputOne === "" || inputTwo === ""}
				onClick={handleMinus}>
				Subtract
			</Button>
			<Button
				className="col-span-1 cursor-pointer"
				disabled={inputOne === "" || inputTwo === ""}
				onClick={handleMultiply}>
				Multiply
			</Button>
			<Button
				className="col-span-1 cursor-pointer"
				disabled={inputOne === "" || inputTwo === ""}
				onClick={handleDivide}>
				Divide
			</Button>
			<Button
				className="col-span-4 cursor-pointer"
				disabled={inputOne === "" && inputTwo === "" && inputTotal === ""}
				variant={"destructive"}
				onClick={handleReset}>
				Reset
			</Button>
		</div>
	);
};

export default BasicCalculator;
