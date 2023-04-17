import React, { useState } from "react";
import CatList from "./CatList";
import Search from "./Search";

function CatPage({ cats, setCats }) {
    const [searchTerm, setSearchTerm] = useState("")

    const unMatchedCatArray = cats.filter((cat) => {
        if (cat.matchStatus === "null") {
            return cat
        }
        else {
            return null
        }
    })

    function handleSearch(search) {
        setSearchTerm(search)
        }

  return (
    <main>
        <Search searchTerm={searchTerm}handleSearch={handleSearch}/>
            <CatList 
                cats={unMatchedCatArray}
                setCats={setCats}
                searchTerm={searchTerm}
            />
    </main>
  );
}

export default CatPage;