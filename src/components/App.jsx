import {  Route , Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "./Home/Home";
import { GiphsSearch } from "./GiphsSearch/GiphsSearch"
import React from "react";
import {GiphDetails} from "./GiphsDetails/GiphsDetails"
import {GiphAuthor} from "./GiphAuthor/GiphAuthor.jsx"

 const App = () => {
  return (
    <div className="App">
     
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="giphs" element={<GiphsSearch />}></Route>
          <Route path="giphs/:giphId" element={<GiphDetails />}>
              <Route path="author" element={<GiphAuthor />} />
          </Route>
          
      </Route>
    </Routes>
    </div>
  );
};

export default App;


// {/* <Layout /> */}

