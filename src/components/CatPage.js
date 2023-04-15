import React from "react";
import CatList from "./CatList";

function CatPage({ cats, setCats }) {

    const unMatchedCatArray = cats.filter((cat) => {
        if (cat.matchStatus === "null") {
            return cat
        }
    })

  return (
    <main>
            <CatList 
                cats={unMatchedCatArray}
                setCats={setCats}
            />
    </main>
  );
}

export default CatPage;