import React from "react";

const Tile = ({ title, link, image, text }) => {
    return (
        <a href={link}>
            <div className="group bg-white hover:bg-oxfordblue shadow-xl hover:shadow-none cursor-pointer w-80 rounded-3xl flex flex-col items-center justify-center">
                <div className="p-4 w-full px-4 flex items-center justify-center">
                    <h1 className="font-bold leading-none text-2xl tracking-wider text-bittersweet pt.2.5">{title}</h1>
                </div>
                <div className="relative mx-2 pb-4">
                    <div className="h-48 rounded-2xl overflow-hidden">
                        <img src={image} className="object-cover w-full h-full" alt="" />
                    </div>
                </div>
                <p className="p-2 text-center group-hover:text-mintcream">{text}</p>
            </div>
        </a>
    );
}

export default Tile;