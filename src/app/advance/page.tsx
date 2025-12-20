import AdvanceCalculator from "@/components/AdvanceCalculator";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Advance | State Calculator",
	description: "Advance Page Of State Calculator",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="">
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Advance Calculator
					</CardTitle>
				</CardHeader>

				<CardContent>
					<AdvanceCalculator />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
