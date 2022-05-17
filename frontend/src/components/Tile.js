import React from "react";
import './Tile.css';

const Tile = ({ title, link, text }) => {
    return (
        <a href={link}>
            <div className="bg-white hover-bg shadow-xl hover:shadow-none cursor-pointer w-80 rounded-3xl flex flex-col items-center justify-center">
                <div className="p-4 w-full px-4 flex items-center justify-center">
                    <h1 className="font-bold leading-none text-2xl tracking-wider tile-heading pt.2.5">{title}</h1>
                </div>
                <div className="relative mx-2 pb-4">
                    <div className="h-48 rounded-2xl overflow-hidden">
                        <img src="https://bit.ly/3BQdTqk" className="object-cover w-full h-full" alt="" />
                    </div>
                </div>
                <p className="p-2 text-center">{text}</p>
            </div>
        </a>
    );
}

export default Tile;