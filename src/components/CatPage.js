import React from "react";
import CatList from "./CatList";

function CatPage({ cats, setCats, match, setMatch }) {

  return (
    <main>
            <CatList 
                cats={cats}
                setCats={setCats}
                match={match} 
                setMatch={setMatch}
            />
    </main>
  );
}

export default CatPage;