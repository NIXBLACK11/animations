import { Card } from "@/components/ui/Card";

export default function Home() {
	const animations = [
		{
			Name: "Simple scroll",
			Description: "Some random description about the animation.",
			Link: "/first"
		},
		{
			Name: "Another animation",
			Description: "Another random description about the animation.",
			Link: "/second"
		},
		{
			Name: "Yet another animation",
			Description: "Yet another description about the animation.",
			Link: "/third"
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
