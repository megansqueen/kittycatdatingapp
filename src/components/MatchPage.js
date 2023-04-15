import React from "react";
import CatCard from "./CatCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MatchPage({cats, match}) {

    const matchedCats = cats.filter((cat) => {
        if (match === true) {
            return cat
        }
    })

    return (
        <Container>
        <Row>
              {matchedCats.map((cat) => (
              <Col sm key={cat.id}>
                      
                          <CatCard 
                              id={cat.id}
                              image={cat.url}
                              name={cat.name}
                              favoritemovie={cat.favoriteMovie}
                              age={cat.age}
                              pickupLine={cat.pickupLine}
                              match={match} 
                          />
              </Col>
          ))}
        </Row>
      </Container>
    )
}


export default MatchPage