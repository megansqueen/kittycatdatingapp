import React from "react";
import CatCard from "./CatCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CatList({
    cats,
    setCats
  }) {
    function handleDeleted(deletedCat) {
        setCats(cats.filter((cat) => cat.id !== deletedCat));
      }

    function handleMatch(match) {
        const unmatchedCats = cats.filter((cat) => {
            if (cat.id !== match) {
                return cat
            }
        })
        setCats(unmatchedCats)
    }

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
                            matchedStatus={cat.matched}
                            handleDeleted={handleDeleted}
                            handleMatch={handleMatch}
                        />
            </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CatList;