

import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { GiphsSearch } from "../../components/GiphsSearch/GiphsSearch";

import * as GiphyAPI from "../../Api/Giphy";
import Accordion from "../../components/Accordion/Accordion";


const SearchGiphsPage = () => {
    const [searchParams] = useSearchParams();
    const [giphs, setGiphs] = useState([]);
    const location = useLocation();
    const isSearchOpen = location.state?.isSearchOpen;
  
    const query = searchParams.get("query") ?? "";
  
    useEffect(() => {
      GiphyAPI.getGiphsByQuery(query).then(setGiphs);
    }, [query]);
  
    return (
      <>
        <Accordion
          title={"Search giphs from Giphy"}
          content={<GiphsSearch query={query} />}
          isOpen={isSearchOpen}
        />
  
        <ul>
          {giphs.map((giph) => (
            <li key={giph.id}>{giph.title}</li>
          ))}
        </ul>
      </>
    );
  };
  
  export default SearchGiphsPage;