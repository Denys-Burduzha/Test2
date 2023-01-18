

import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import * as GiphyAPI from "../../Api/Giphy";

export const GiphDetails = () => {
    const {giphId} = useParams();
    const [giphDetails, setGiphDetails] = useState();

   

    useEffect(() => {
        GiphyAPI.getGiphById(giphId).then(setGiphDetails)
    }, []);

    console.log(giphDetails);

    if (!giphDetails) {
        return null;
        
    }

    return(
        <>
            <div>
            Giph details
                <img src={ giphDetails.images.original.url } alt="Giph details" />
            </div>

            <div>
                <h3>Giph Info</h3>
            </div>
        </>
    );
};