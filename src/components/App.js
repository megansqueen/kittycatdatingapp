import React, { useState, useEffect } from "react";
import CatPage from "./CatPage";
import NavBar from "./NavBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[cats, setCats] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/cats")
    .then((r) => r.json())
        .then((cats) => setCats(cats))
    }, [])

return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<NavBar />}></Route>
      </Routes>
    </BrowserRouter>
      <CatPage cats={cats} setCats={setCats}/>
  </div>
);
}

export default App;

{/* <Route path="/" element={<Home />} />
<Route path="users/*" element={<Users />} /> */}