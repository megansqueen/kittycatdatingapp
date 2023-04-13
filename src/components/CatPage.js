import React, { useEffect, useState } from "react";
import CatList from "./CatList";

function CatPage({}) {
    const[cats, setCats] = useState([])
  
    useEffect(() => {
      fetch("http://localhost:3000/cats")
      .then((r) => r.json())
          .then((cats) => setCats(cats))
      }, [])

  return (
    <main>
            <CatList 
                cats={cats}
                setCats={setCats}
            />
    </main>
  );
}

export default CatPage;