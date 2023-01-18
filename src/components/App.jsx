import {  Route , Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "./Home/Home";
import { GiphsSearch } from "./GiphsSearch/GiphsSearch"
import React from "react";
import {GiphDetails} from "./GiphsDetails/GiphsDetails"

 const App = () => {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="giphs" element={<GiphsSearch />}></Route>
          <Route path="giphs/:giphId" element={<GiphDetails />} />
      </Route>
    </Routes>
    </div>
  );
};

export default App;


// {/* <Routes></Routes>
//         <Route path="/" element={<Layout />}></Route>
//            <Route index element={<Home />} />
//            <Route path="giphs" element={<GiphsSearch />}></Route>
//            <Route path="giphs/:giphId" element={<GiphDetails />} />
//         </Route>
//      </Routes> */}
