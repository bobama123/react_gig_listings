
import React from "react";


const GigDisplay = (props) => {
    return (
        <div className="gig">
            <h3 className="band name">{props.name}</h3>
                <img src={props.image} alt="event image"/>
                <p className="description">{props.description}</p>
                <p className="date and time">{props.date_and_time}</p>
                <p className="location">{props.location}</p>
                <p className="isfavourite">{props.isFavourite}</p>
        </div>
    );
};

export default GigDisplay;



