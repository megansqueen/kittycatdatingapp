import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function CatCard({    
    name,
    image,
    age,
    favoritemovie,
    pickupLine
}) {
    const[match, setMatch] = useState(false)

    function handleMatch() {
        setMatch(true)
    }

    function handleUnMatch() {
        setMatch(!match)
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
        {match ? (
            <button onClick={handleUnMatch}className="primary">Unmatch</button>
        ) : (
            <button onClick={handleMatch}>Match</button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CatCard;