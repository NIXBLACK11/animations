import { Card } from "@/components/ui/Card";

export default function Home() {
	const animations = [
		{
			Name: "Loader animation",
			Description: "Rotating loader animation.",
			Link: "/animations/first"
		}, {
			Name: "Button click animation",
			Description: "Hover and click scale animation.",
			Link: "/animations/second"
		}, {
			Name: "Card animation",
			Description: "Draw card on hover animation.",
			Link: "/animations/third"
		}, {
			Name: "Scroll animation",
			Description: "Animate fruits on Scroll.",
			Link: "/animations/fourth"
		}, {
			Name: "Reveal on scroll",
			Description: "Reveals items on scroll.",
			Link: "/animations/fifth"
		}, {
			Name: "Scroll animation lie acertinity",
			Description: "Rotates screen on scroll.",
			Link: "/animations/sixth"
		}, {
			Name: "Writing on scroll",
			Description: "Gradually writes when i scroll.",
			Link: "/animations/seventh"
		}
	];
	return (
		<div className="flex flex-col items-center h-screen w-screen bg-[#000000]">
			<h1 className="m-10 text-4xl text-[#ffffff]">
				Welcome to my animations 🪄
			</h1>
			<div className="grid grid-cols-3 gap-12 p-10">
				{animations.map((animation, idx) => (
					<Card
						key={idx}
						Name={animation.Name}
						Description={animation.Description}
						Link={animation.Link}
					/>
				))}
			</div>
		</div>
	);
}
