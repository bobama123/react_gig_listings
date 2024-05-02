import React from "react";
import "./Gig.css";
import GigDisplay from "./GigDisplay"
import GigButton from "./GigButton"
import GigDetails from "./GigData";


const GigImproved = () => {
    const favouriteGigs = GigDetails.filter(gig => gig.isFavourite===true);
    const notFavouriteGigs = GigDetails.filter(gig => gig.isFavourite===false);


    return (
        <div>
            <div> 
                <h1>Favourites</h1>
                <ul>
                    {favouriteGigs.map(gig => (
                        <li key={gig.id}>
                            <GigDisplay {...gig} />
                            <GigButton />
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h1>Other</h1>
                <ul>
                    {notFavouriteGigs.map(gig => (
                        <li key={gig.id}>
                            <GigDisplay {...gig} />
                            <GigButton />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GigImproved;


// basically if isfavourite: true, then should be in the favourites list
//isfavourite: false, then should be in the other list


