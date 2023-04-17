import React from "react";


function Search({ searchTerm, handleSearch }) {
// const[search, setSearch] = useState("")

    // function handleOnSearch(e) {
    //     e.preventDefault()
    //     onSearch(search)
    // }

return (

    <div className="searchbar">
        <label htmlFor="search">Search Cats</label>
            <input
                type="search"
                id="search"
                placeholder="Search Cats"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
        />
    </div>

)
}

export default Search
