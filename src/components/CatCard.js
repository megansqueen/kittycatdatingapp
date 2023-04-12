import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function CatCard({    
    name,
    image,
    age,
    favoritemovie
}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Single</Card.Title>
        <Card.Text>
          {name}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{name}</ListGroup.Item>
        <ListGroup.Item>{age}</ListGroup.Item>
        <ListGroup.Item>Favorite Movie: {favoritemovie}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CatCard;