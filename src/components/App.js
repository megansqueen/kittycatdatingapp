import React, { useEffect, useState } from "react";
import CatPage from "./CatPage";
import NavBar from "./NavBar";
import CreateProfile from "./CreateProfile";
import MatchPage from "./MatchPage";
import LearnMore from "./LearnMore";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[page, setPage] = useState("/")
  const[cats, setCats] = useState([])
  const[match, setMatch] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/cats")
    .then((r) => r.json())
        .then((cats) => setCats(cats))
    }, [])

return (
  <div>
    <NavBar onChangePage={setPage}/>
      <Routes>
        <Route exact path="/*" element={<CatPage cats={cats} setCats={setCats}/>} />
        <Route path="/createprofile" element={<CreateProfile cats={cats} setCats={setCats}/>} />
        <Route path="/matchpage" match={match} setMatch={setMatch}element={<MatchPage match={match}cats={cats}/>} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="*" element={<h1>404 Error</h1>} />
      </Routes>
  </div>
);
}

export default App;

{/* <Route path="/" element={<Home />} />
<Route path="users/*" element={<Users />} /> */}