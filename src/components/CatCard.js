import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CatCard({    
    name,
    image,
    age,
    favoritemovie,
    pickupLine, 
    id,
    handleDeleted,
    handleMatch,
    handleUnMatch,
    matchedStatus
}) {

    function handleDeleteClick() {
        fetch(`http://localhost:3000/cats/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => handleDeleted(id))
      }

    function handleMatchUpdate() {
        fetch(`http://localhost:3000/cats/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "matchStatus": "matched"
            })
        })
            .then((r) => r.json())
            .then(() => handleMatch(id))
    }

    function handleUnMatchUpdate() {
        fetch(`http://localhost:3000/cats/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "matchStatus": "null"
            })
        })
            .then((r) => r.json())
            .then(() => handleUnMatch(id))
    }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {pickupLine}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Age: {age}</ListGroup.Item>
        <ListGroup.Item>Favorite Movie: {favoritemovie}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button onClick={handleMatchUpdate}variant="danger">Match</Button>
        <Button onClick={handleUnMatchUpdate}variant="secondary">Unmatch</Button>
        <Button onClick={handleDeleteClick}variant="dark">Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default CatCard;