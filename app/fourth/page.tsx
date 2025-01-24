"use client"

import { motion } from "framer-motion";

export default function Home() {
    const fruits = [
        {
            name: "Apple",
            color: "red",
            emoji: "🍎"
        },
        {
            name: "Banana",
            color: "yellow",
            emoji: "🍌"
        },
        {
            name: "Orange",
            color: "orange",
            emoji: "🍊"
        },
        {
            name: "Apple",
            color: "red",
            emoji: "🍎"
        },
        {
            name: "Banana",
            color: "yellow",
            emoji: "🍌"
        },
        {
            name: "Orange",
            color: "orange",
            emoji: "🍊"
        },
        {
            name: "Apple",
            color: "red",
            emoji: "🍎"
        },
        {
            name: "Banana",
            color: "yellow",
            emoji: "🍌"
        },
        {
            name: "Orange",
            color: "orange",
            emoji: "🍊"
        }
    ]
    return (
        <div className="max-w-screen min-h-screen bg-[#000000] flex items-center justify-center flex-col gap-4">
            {fruits.map((fruit, idx) => (
                <motion.div
                    key={idx}
                    initial={{ backgroundColor: "#ffffff", opacity: 0, scale: 0.75 }}
                    whileInView={{ backgroundColor: fruit.color, opacity: 1, scale: 1 }}
                    className="w-2/6 h-72 rounded-lg my-2 flex flex-col items-center"
                >
                    <h1 className="text-white text-2xl font-bold mt-2">{fruit.name}</h1>
                    <p className="text-[10rem]">{fruit.emoji}</p>
                </motion.div>
            ))}
        </div>
    )
}