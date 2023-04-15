import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function CreateProfile({ cats, setCats }) {
    const [name, setName] = useState([])
    const [age, setAge] = useState([])
    const [image, setImage] = useState([])
    const [movie, setMovie] = useState([])
    const [pickupLine, setPickupLine] = useState([])
    const [matchStatus, setMatchStatus] = useState([])

    function handleItem(newItem) {
        console.log(newItem)
        setCats([...cats, newItem])
    }

    function handleReset() {
        setName("")
        setAge("")
        setImage("")
        setMovie("")
        setPickupLine("")
        setMatchStatus("null")
    }

    function handleSubmit(e) {
        e.preventDefault();
        const itemData = {
            url: image,
            name: name,
            favoriteMovie: movie,
            age: age,
            pickupLine: pickupLine,
            matchStatus: matchStatus
        }
        fetch("http://localhost:3000/cats", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(itemData),
        })
        .then((r) => r.json())
        .then((newItem) => handleItem(newItem))
        .then(handleReset)
    }

    return (
        <div className="new-cat-form">
        <h2>Create Profile</h2>
        <Form className="d-flex">
                    <Form.Control onChange={(e) => setName(e.target.value)}type="text" name="name" placeholder="Cat name" value={name}/>
                    <Form.Control onChange={(e) => setAge(e.target.value)}type="number" name="age" placeholder="Cat age" value={age}/>
                    <Form.Control onChange={(e) => setImage(e.target.value)}type="text" name="image" placeholder="Image URL" value={image}/>
                    <Form.Control onChange={(e) => setMovie(e.target.value)}type="text" name="movie" placeholder="movie" value={movie}/>
                    <Form.Control onChange={(e) => setPickupLine(e.target.value)}type="text" name="pickupLine" placeholder="Pickup Line" value={pickupLine}/>
                <Button type="submit"onClick={handleSubmit}>Add Profile/</Button>
            </Form>
      </div>
    );
  }

export default CreateProfile