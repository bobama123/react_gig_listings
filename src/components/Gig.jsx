import React from "react";
import "./Gig.css";
import { useState } from "react";

const Gig = (props) => {

    const [favourite, setFavourite] = useState(false)

    const toggleFavourite = () => {
        setFavourite(!favourite);
    }
    return (
        <div className="gig">
            <h3 className="band name">{props.name}</h3>
                <img src={props.image} alt="event image"/>
                <p className="description">{props.description}</p>
                <p className="date and time">{props.date_and_time}</p>
                <p className="location">{props.location}</p>
                <button onClick={toggleFavourite}>
                {favourite ? "Remove from favorites" : "Add to favorites"}
            </button>
        </div>
    );
};

export default Gig;









