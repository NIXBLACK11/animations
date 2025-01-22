"use client"

import { useRouter } from "next/navigation";

export const Card = ({Name, Description, Link}: {Name: string, Description: string, Link: string}) => {
    const router = useRouter();
    return (
        <div className="border border-white rounded-lg p-10">
            <h1 className="text-white text-1xl mb-4">{Name}</h1>
            <p className="text-white text-xs mb-4">{Description}</p>
            <p className="text-white text-sm underline" onClick={()=>{router.push(Link)}}>{Link}</p>
        </div>
    )
}