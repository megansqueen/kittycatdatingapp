import React from "react";
import CatCard from "./CatCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CatList({
    cats,
    setCats,
    searchTerm
  }) {

    const filteredCats = cats.filter ((cat) => {
        return cat.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    function handleDeleted(deletedCat) {
        const remainingCats = filteredCats.filter((cat) => {
            if (cat.id !== deletedCat) {
                return cat
            } else {
                return null
            }
        })
        setCats(remainingCats)
    }

    function handleMatch(match) {
        const unmatchedCats = filteredCats.filter((cat) => {
            if (cat.id !== match) {
                return cat
            }
            else {
                return null
            }
        })
        setCats(unmatchedCats)
    }

  return (
    <Container>
      <Row>
            {filteredCats.map((cat) => (
            <Col sm key={cat.id}>
                    
                        <CatCard 
                            id={cat.id}
                            image={cat.url}
                            name={cat.name}
                            favoritemovie={cat.favoriteMovie}
                            age={cat.age}
                            pickupLine={cat.pickupLine}
                            matchedStatus={cat.matchStatus}
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