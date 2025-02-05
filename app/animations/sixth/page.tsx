"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image"
import { useRef } from "react"

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll({
        target: containerRef
    })

    const rotateX = useTransform(scrollYProgress, [0, 0.1], [6, 0]);
    const translateY = useTransform(scrollYProgress, [0, 0.1], [0, 500]);
    const scale = useTransform(scrollYProgress, [0, 0.1], [0.9, 1.1]);

    return (
        <div
            ref={containerRef} 
            className="bg-[#000000] w-full h-[160vh] flex items-center justify-start py-40 flex-col [perspective:800px] [transform-style:preserve-3d]"
        >
            <h1 className="text-6xl font-bold text-white">
                This is a random <br />scroll animation
            </h1>
            <motion.div
                style={{
                    rotateX: rotateX,
                    translateZ: "60px",
                    scale,
                    y: translateY
                }}
                className="bg-[#ffffff] rounded-3xl w-1/2 h-[550px] p-2 -mt-6 shadow-lg shadow-neutral-500"
            >
                <div className="bg-[#000000] rounded-[16px] h-full w-full p-2">
                    <Image
                        src="/animos.jpg"
                        className="bg-neutral-400 w-full h-full rounded-[8px] blur-sm"
                        width={1024}
                        height={1024}
                        alt="animnos.png"
                    />
                </div>
            </motion.div>
        </div>
    )
}