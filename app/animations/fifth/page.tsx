"use client"

import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        [0, 0.25, 0.5, 0.75, 1]
    )
    return (
        <div className="max-w-screen h-[200vh] bg-[#000000] flex items-center justify-center flex-col gap-72">
            <motion.div
                className="bg-white rounded-lg w-4/6 h-72 flex items-center justify-center fixed top-1/4"
                style={{ scale: scale }}
            >
                <h1 className="text-2xl text-black">Hello</h1>
            </motion.div>
        </div>
    );
}
