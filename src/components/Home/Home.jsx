

import { useEffect, useState } from "react"
import * as GiphyAPI from "../../Api/Giphy";
import { Link } from "react-router-dom";

export const Home = () => {

    const [trendingGiphs, setTrendingGiphs] = useState([]);

    useEffect(() => {
        GiphyAPI.getTrendingGiphs().then( setTrendingGiphs);
    }, []);

    return (
        <>
        <ul>
            {trendingGiphs.map((trendingGiph) => (
                <li key={trendingGiph.id}>
                    <Link to={`/giphs/${trendingGiph.id}`}>{trendingGiph.title}</Link>                  
                </li>
            ))}
        </ul>
    </>
    );
};




