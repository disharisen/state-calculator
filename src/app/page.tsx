import BasicCalculator from "@/components/BasicCalculator";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Basic | State Calculator",
	description: "Basic Page Of State Calculator",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="">
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Basic Calculator
					</CardTitle>
				</CardHeader>

				<CardContent>
					<BasicCalculator />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
