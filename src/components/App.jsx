// import {  Navigate, Route , Routes } from "react-router-dom";
// import { Layout } from "./Layout/Layout";
// import { Home } from "./Home/Home";
// // import { GiphsSearch } from "./GiphsSearch/GiphsSearch"
// import React from "react";
// // import GiphDetails from "./GiphsDetails/GiphsDetails"
// import {GiphAuthor} from "./GiphAuthor/GiphAuthor.jsx"


// const GiphDetails = React.lazy(() =>
//   import("../components/GiphsDetails/GiphsDetails")
// );

// const SearchGiphsPage = React.lazy(() =>
//   import("../pages/SearchGiphsPage/SearchGiphsPage")
// );

//  const App = () => {
//   return (
//     <div className="App">
//       {/* <Layout /> */}
//     <Routes>
//       <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="giphs" element={<SearchGiphsPage />} />
//           <Route path="giphs/:giphId" element={<GiphDetails />}>
//               <Route path="author" element={<GiphAuthor />} />
//           </Route>

//           <Route path="*" element={<Navigate to="/giphs" />} />
          
//       </Route>
//     </Routes>
//     </div>
//   );
// };

// export default App;


// {/* <Layout /> */}

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { GiphAuthor } from "./GiphAuthor/GiphAuthor";
import { Home } from "./Home/Home";
import { Layout } from "./Layout/Layout";

const GiphDetails = React.lazy(() =>
  import("./GiphsDetails/GiphsDetails")
);
const SearchGiphsPage = React.lazy(() =>
  import("../pages/SearchGiphsPage/SearchGiphsPage")
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="giphs" element={<SearchGiphsPage />} />
          <Route path="giphs/:giphId" element={<GiphDetails />}>
            <Route path="author" element={<GiphAuthor />} />
          </Route>

          <Route path="*" element={<Navigate to="/giphs" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

