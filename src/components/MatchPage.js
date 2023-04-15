import React, { useState } from "react";
import CatCard from "./CatCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MatchPage({cats, setCats}) {
    
    const matchedCatArray = cats.filter((cat) => {
        if (cat.matchStatus === "matched") {
            return cat
        }
    })

    function handleUnMatch(unMatch) {
        const matchedCats =  matchedCatArray.filter((cat) => {
            if (cat.id !== unMatch) {
                return cat
            }
        })
        setCats(matchedCats)
    }

    return (
        <Container>
        <Row>
              {matchedCatArray.map((cat) => (
              <Col sm key={cat.id}>
                          <CatCard 
                              id={cat.id}
                              image={cat.url}
                              name={cat.name}
                              favoritemovie={cat.favoriteMovie}
                              age={cat.age}
                              pickupLine={cat.pickupLine}
                              handleUnMatch={handleUnMatch}
                          />
              </Col>
          ))}
        </Row>
      </Container>
    )
}


export default MatchPage