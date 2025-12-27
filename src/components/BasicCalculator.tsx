"use client";

import { useState } from "react";
import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";

const BasicCalculator = () => {
	const [InputOne, setInputOne] = useState("");
	const [InputTwo, setInputTwo] = useState("");
	const [InputTotal, setInputTotal] = useState("");

	const handleAdd = () => {};

	const handleMinus = () => {};

	const handleMultiply = () => {};

	const handleDivide = () => {};

	const handleReset = () => {};

	return (
		<div className="grid grid-cols-4 gap-8">
			<Input
				className="col-span-2"
				placeholder="Number 1"
				onChange={({ target }) => setInputOne(target.value)}
				value={InputOne}
			/>
			<Input
				className="col-span-2"
				placeholder="Number 2"
				onChange={({ target }) => setInputTwo(target.value)}
				value={InputTwo}
			/>
			<Input
				className="col-span-4"
				placeholder="Total"
				disabled
				onChange={({ target }) => setInputTotal(target.value)}
				value={InputTotal}
			/>

			<Button
				className="col-span-1 cursor-pointer"
				onClick={handleAdd}>
				Add
			</Button>
			<Button
				className="col-span-1 cursor-pointer"
				onClick={handleMinus}>
				Subtract
			</Button>
			<Button
				className="col-span-1 cursor-pointer"
				onClick={handleMultiply}>
				Multiply
			</Button>
			<Button
				className="col-span-1 cursor-pointer"
				onClick={handleDivide}>
				Divide
			</Button>
			<Button
				className="col-span-4 cursor-pointer"
				variant={"destructive"}
				onClick={handleReset}>
				Reset
			</Button>
		</div>
	);
};

export default BasicCalculator;
