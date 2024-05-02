import React from "react";
import { useState } from "react";
import gigDetails from "./GigData";

const GigButton = ({ isFavourite }) => {

    const [favourite, setFavourite] = useState(isFavourite);
    
    const toggleFavourite = () => {
        setFavourite(!favourite);
    }

    return (
        <button onClick={toggleFavourite}>
                {favourite ? "Remove from favourites" : "Add to favourites"}
        </button>
    );
};


export default GigButton;
