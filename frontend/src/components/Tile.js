import React from "react";

const Tile = ({ title, link }) => {
    return (
        <a href={link}>
            <div className="bg-white hover:bg-gray-800 shadow-xl hover:shadow-none cursor-pointer w-80 rounded-3xl flex flex-col items-center justify-center">
                <div className="pt-6 w-full px-4 flex items-center justify-center">
                    <h1 className="font-bold leading-none text-base tracking-wider text-gray-400">{title}</h1>
                </div>
                <div className="relative mt-2 mx-2 pb-6 pt-6">
                    <div className="h-56 rounded-2xl overflow-hidden">
                        <img src="https://bit.ly/3BQdTqk" className="object-cover w-full h-full" alt="" />
                    </div>
                </div>
            </div>
        </a>
    );
}

export default Tile;