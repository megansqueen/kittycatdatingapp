import React from "react";
import NewCatForm from "./NewCatForm";
import CatList from "./CatList";

function CatPage({ setCats, cats }) {

  return (
    <main>
      <NewCatForm cats={cats}setCats={setCats}/>
          <CatList 
              cats={cats}
              setCats={setCats}
            />
    </main>
  );
}

export default CatPage;