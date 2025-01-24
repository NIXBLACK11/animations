"use client"

import { motion } from "framer-motion";

export default function Home() {
    const cards = [
		{
			Name: "First Card",
			Description: "Some random description about the card."
		},
		{
			Name: "Second Card",
			Description: "Another random description about the card."
		},
		{
			Name: "Third Card",
			Description: "Yet another description about the card."
		},
        {
			Name: "First Card",
			Description: "Some random description about the card."
		},
		{
			Name: "Second Card",
			Description: "Another random description about the card."
		},
		{
			Name: "Third Card",
			Description: "Yet another description about the card."
		}
	];
    return (
        <div className="w-screen h-screen bg-[#000000] flex items-center justify-center">
            <div className="flex -mx-32">
                {cards.map((card, idx) => {
                    return (
                        <motion.div
                        key={idx}
                            className="bg-white hover:bg-slate-200 rounded-lg w-52 h-80 flex flex-col justify-center items-center border-2 border-slate-500 shadow-xl hover:shadow-yellow-400"
                            whileHover={{ x:-20, y: -100, scale: 1.05 }}
                            style={{ marginRight: '-2rem' }}
                        >
                            <h1 className="text-black text-2xl">{card.Name}</h1>
                            <p className="text-black text-sm">{card.Description}</p>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}