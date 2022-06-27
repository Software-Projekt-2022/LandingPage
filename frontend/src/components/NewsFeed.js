import React, {useContext, useState} from "react";
import News from "./News";
import { SocketContext } from '../context/socket';


const NewsFeed = () => {
    const socket = useContext(SocketContext);
    const [news, setNews] = useState([]);
    
    socket.on("NEWS", res => {
        setNews(res);
    });

    return (
        <div>
            <h1 className="font-bold text-3xl text-center">Neuigkeiten</h1>
            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                {news.map((element, index) => (
                <News
                    key={index}
                    title={element.title}
                    link="#"
                    text={element.text}
                />
                ))}
            </div>
        </div>
    );
}


export default NewsFeed;