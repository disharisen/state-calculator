"use client";

import { DivideIcon, MinusIcon, PlusIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./shadcnui/select";

const AdvanceCalculator = () => {
	const [inputOne, setInputOne] = useState("");
	const [inputTwo, setInputTwo] = useState("");
	const [inputTotal, setInputTotal] = useState("");

	const [inputOperator, setInputOperator] = useState("");

	const handleCalculate = () => {};

	const handleReset = () => {};

	return (
		<div className="grid grid-cols-3 gap-8">
			<Input
				className="col-span-1"
				placeholder="Number 1"
				onChange={({ target }) => setInputOne(target.value)}
				value={inputOne}
			/>

			<Select
				onValueChange={(value) => setInputOperator(value)}
				value={inputOperator}>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Operator" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="plus">
						<PlusIcon />
					</SelectItem>
					<SelectItem value="minus">
						<MinusIcon />
					</SelectItem>
					<SelectItem value="multiply">
						<XIcon />
					</SelectItem>
					<SelectItem value="divide">
						<DivideIcon />
					</SelectItem>
				</SelectContent>
			</Select>

			<Input
				type="number"
				className="col-span-1"
				placeholder="Number 2"
				onChange={({ target }) => setInputTwo(target.value)}
				value={inputTwo}
			/>

			<Input
				type="number"
				className="col-span-2"
				placeholder="Total"
				disabled
				onChange={({ target }) => setInputTotal(target.value)}
				value={inputTotal}
			/>

			<Button
				className="col-span-1 cursor-pointer"
				disabled={inputOne === "" || inputTwo === "" || inputOperator === ""}
				onClick={handleCalculate}>
				Calculate
			</Button>
			<Button
				className="col-span-3 cursor-pointer"
				disabled={
					inputOne === "" &&
					inputTwo === "" &&
					inputOperator === "" &&
					inputTotal === ""
				}
				onClick={handleReset}
				variant={"destructive"}>
				Reset
			</Button>
		</div>
	);
};

export default AdvanceCalculator;
