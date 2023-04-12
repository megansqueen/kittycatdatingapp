import React, { useState, useEffect } from "react";
import CatPage from "./CatPage";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Header from "./Header";

function App() {
  const[cats, setCats] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/cats")
    .then((r) => r.json())
        .then((cats) => setCats(cats))
    }, [])

    return (
      <div className="app">
        {/* <Header /> */}
        <CatPage cats={cats} setCats={setCats}/>
      </div>
    );
}

export default App;

