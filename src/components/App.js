import React, { useState, useEffect } from "react";
import CatPage from "./CatPage";
import NavBar from "./NavBar";
import ProfilePage from "./ProfilePage";
import MatchPage from "./MatchPage";
import LearnMore from "./LearnMore";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[page, setPage] = useState("/")

return (
  <div>
    <NavBar onChangePage={setPage}/>
      <Routes>
        <Route exact path="/" element={<CatPage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/matchpage" element={<MatchPage />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="*" element={<h1>404 Error</h1>} />
      </Routes>
  </div>
);
}

export default App;

{/* <Route path="/" element={<Home />} />
<Route path="users/*" element={<Users />} /> */}