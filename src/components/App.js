import React, { useEffect, useState } from "react";
import CatPage from "./CatPage";
import NavBar from "./NavBar";
import CreateProfile from "./CreateProfile";
import MatchPage from "./MatchPage";
import LearnMore from "./LearnMore";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[cats, setCats] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/cats")
    .then((r) => r.json())
        .then((cats) => setCats(cats))
    }, [])

  function handleNewCat(newItem) {
      console.log(newItem)
      setCats([...cats, newItem])
  }

return (
  <div>
    <NavBar />
      <Routes>
        <Route exact path="/*" element={<CatPage cats={cats} setCats={setCats}/>} />
        <Route path="/createprofile" element={<CreateProfile handleNewCat={handleNewCat}cats={cats} setCats={setCats}/>} />
        <Route path="/matchpage" element={<MatchPage setCats={setCats}cats={cats}/>} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="*" element={<h1>404 Error</h1>} />
      </Routes>
  </div>
);
}

export default App;