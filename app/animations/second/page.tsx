"use client"

import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="w-screen h-screen bg-[#000000] flex items-center justify-center">
            <motion.div
                className="bg-white hover:bg-slate-200 rounded-lg w-32 h-32"
                onClick={() => {
                }}
                whileTap={{ scale: 1.2 }}
                whileHover={{ scale: 0.7 }}
            />
        </div>
    )
}