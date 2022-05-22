import React from "react";
import News from "./News";

const NewsFeed = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl text-center">Neuigkeiten</h1>
            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <News title="Sommerfest" link="#" text="Das große Sommerfest steht an" />
                <News title="Wetter" link="#" text="Die Sonne begrüßt das Wochenende" />
                <News title="Baustelle B42" link="#" text="" />
                <News title="Stellenmarkt" link="#" text="Viele freie Stellen warten auf Sie!" />
            </div>
        </div>
    );
}


export default NewsFeed;