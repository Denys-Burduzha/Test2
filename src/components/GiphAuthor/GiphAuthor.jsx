// import {useEffect, useState } from "react";
// import * as GiphyAPI from "../../Api/Giphy";
// import { useParams } from "react-router-dom";

// export const GiphAuthor = () => {
//     const {giphId} = useParams();
//     const [giphAuthor, setGiphAuthor] = useState();

//     useEffect(() => {
//         GiphyAPI.getGiphById(giphId).then(setGiphAuthor)
//     }, [ giphId]);

//     // console.log(giphDetails);

//     if (!giphAuthor) {
//         return null; 
//     }

//     return (
//         <>
//           <h3>Giph Author</h3>
//         <p>
//             <b>Username:</b> { giphAuthor.username }
//         </p>
//         <p>
//             <b>Source:</b> { giphAuthor.source_tld }
//         </p>
//         </>
//     )
// }