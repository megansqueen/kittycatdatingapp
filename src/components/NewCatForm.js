import React, { useState } from "react";

function NewPlantForm({ setCats, cats }) {
    const [name, setName] = useState([])
    const [image, setImage] = useState([])
    const [age, setAge] = useState([])
    const [favoritemovie, setFavoriteMovie] = useState([])
  
    function handleItem(newItem) {
      console.log(newItem)
      setCats([...cats, newItem])
    }

    function handleSubmit(e) {
      e.preventDefault();
      const itemData = {
        name: name,
        image: image,
        age: age,
        favoritemovie: favoritemovie
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
      <h2>New Cat</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)}type="text" name="name" placeholder="Plant name" value={name}/>
        <input onChange={(e) => setImage(e.target.value)}type="text" name="image" placeholder="Image URL" value={image}/>
        <input onChange={(e) => setAge(e.target.value)}type="number" name="age" placeholder="age" age={age}/>
        <input onChange={(e) => setFavoriteMovie(e.target.value)}type="text" name="favoriteMovie" placeholder="favoriteMovie" favoritemovie={favoritemovie}/>
        <button type="submit">Add Cat</button>
      </form>
    </div>
  );
}

export default NewPlantForm;