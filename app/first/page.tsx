"use client"

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
    const [toggle, setToggle] = useState(true);
    const [rotate, setRotate] = useState(360);
    return (
        <div className="w-screen h-screen bg-[#000000] flex items-center flex-col gap-72">
            <button
                className="border border-white rounded-lg mt-5 p-2 text-white"
                onClick={() => {
                    setToggle(!toggle);
                    setRotate((rotate) => (rotate == 360 ? 0 : 360));
                }}
            >
                {toggle==true ? "End animation" : "Start animation"}
            </button>
            <motion.div
                key={rotate}
                className="bg-white rounded-lg w-20 h-20"
                animate={{ rotate: rotate }}
                transition={{ type: "spring", duration: 4, repeat: Infinity }}
            />
        </div>
    );
}
