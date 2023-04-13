import React from "react";
import CatList from "./CatList";

function CatPage({ setCats, cats }) {

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