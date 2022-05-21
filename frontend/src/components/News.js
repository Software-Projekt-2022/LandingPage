import React from "react";
import './News.css';

const News = ({ title, link, text }) => {
    return (
        <a href={link} class="-m-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-300">
            <p class="text-base font-bold title-color text-center">{title}</p>
            <p class="mt-1 text-sm text-gray-500">{text}</p>
        </a>
    );
}

export default News;