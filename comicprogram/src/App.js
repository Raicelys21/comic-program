import ComicPage from './components/comicPage';
import DetailsComic from './components/detailsComic'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (
    <div>
    <Router>
     <Routes>
       <Route path="/" element={<ComicPage/>}/>
       <Route path="/details/:id" exact element={<DetailsComic/>} />
     </Routes>
   </Router>
  </div>
 
  );

}

export default App;
