import React from "react";
import CatList from "./CatList";
import Search from "./Search";

function CatPage({ cats, setCats }) {

    const unMatchedCatArray = cats.filter((cat) => {
        if (cat.matchStatus === "null") {
            return cat
        }
    })

    function handleSearch(search) {
        const searchedArray = unMatchedCatArray.filter((cat) => {
          if(cat.name.toLowerCase().includes(search.toLowerCase())) {
              return cat
            } 
          })
          setCats(searchedArray)
        }

  return (
    <main>
        <Search onSearch={handleSearch} />
            <CatList 
                cats={cats}
                setCats={setCats}
            />
    </main>
  );
}

export default CatPage;