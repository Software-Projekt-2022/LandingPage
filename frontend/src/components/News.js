import React from "react";
import './News.css';

const News = ({ title, link, text }) => {
    return (
        <a href={link} className="-m-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-300">
            <p className="text-base font-bold title-color text-center">{title}</p>
            <p className="mt-1 text-sm text-gray-500">{text}</p>
        </a>
    );
}

export default News;