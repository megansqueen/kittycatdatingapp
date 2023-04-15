import React, { useState } from "react";

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
    }

    return (
        <div className="new-cat-form">
        <h2>Create Profile</h2>
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setName(e.target.value)}type="text" name="name" placeholder="Cat name" value={name}/>
          <input onChange={(e) => setAge(e.target.value)}type="number" name="age" placeholder="Cat age" value={age}/>
          <input onChange={(e) => setImage(e.target.value)}type="text" name="image" placeholder="Image URL" value={image}/>
          <input onChange={(e) => setMovie(e.target.value)}type="text" name="movie" placeholder="movie" value={movie}/>
          <input onChange={(e) => setPickupLine(e.target.value)}type="text" name="pickupLine" placeholder="Pickup Line" value={pickupLine}/>
          <button type="submit"onClick={handleReset}>Add Profile</button>
        </form>
      </div>
    );
  }

export default CreateProfile