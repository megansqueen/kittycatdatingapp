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
        <Route to="/profilepage" element={<ProfilePage />} />
        <Route to="/matchpage" element={<MatchPage />} />
        <Route to="/learnmore" element={<LearnMore />} />
        <Route to="/" element={<CatPage />} />
      </Routes>
    <CatPage />
  </div>
);
}

export default App;

{/* <Route path="/" element={<Home />} />
<Route path="users/*" element={<Users />} /> */}