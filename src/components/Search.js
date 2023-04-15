import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Search({ onSearch }) {
const[search, setSearch] = useState("")

    function handleOnSearch(e) {
        e.preventDefault()
        onSearch(search)
    }

return (

    <Form className="d-flex">
        <Form.Control
            type="search"
            placeholder="Search Cats"
            className="me-2"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleOnSearch}type="submit"variant="outline-success">Search</Button>
    </Form>

)
}

export default Search
