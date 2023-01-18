

import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
// import { Link } from "react-router-dom";
import * as GiphyAPI from "../../Api/Giphy";
import { Outlet } from "react-router-dom";

export const GiphDetails = () => {
    const {giphId} = useParams();
    const navigate = useNavigate();
    const [giphDetails, setGiphDetails] = useState();

   

    useEffect(() => {
        GiphyAPI.getGiphById(giphId).then(setGiphDetails)
    }, [giphId]);

    console.log(giphDetails);

    if (!giphDetails) {
        return null;
        
    }

    return(
        <>
            <button onClick={() => navigate(- 1) }>Back</button>
            <div>
                <img src={ giphDetails.images.original.url } alt={giphDetails.title} />
            </div>

            <div>
                <h3>Giph Info</h3>
                <div>{giphDetails.title}</div>
            </div>
            <hr />
            <div>
                <h3>Actions</h3>
                <button onClick={() =>  navigate("author")}>Author</button> 
            </div>
            <Outlet />
        </>
    );
};