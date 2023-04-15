import React from "react";
import CatCard from "./CatCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CatList({
    cats,
    match, 
    setMatch
  }) {

  return (
    <Container>
      <Row>
            {cats.map((cat) => (
            <Col sm key={cat.id}>
                    
                        <CatCard 
                            id={cat.id}
                            image={cat.url}
                            name={cat.name}
                            favoritemovie={cat.favoriteMovie}
                            age={cat.age}
                            pickupLine={cat.pickupLine}
                            match={match} 
                            setMatch={setMatch}
                        />
            </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CatList;