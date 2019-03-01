import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Home() {
  return (
    <Container className="py-3 px-3">
      <Jumbotron>
        <h2>Welcome to Andy Yang&#39;s Personal Website!</h2>
        <p>
        This is a place where I will put my experiences, contact info,
        and possibly a blog or some projects.
        </p>
      </Jumbotron>
    </Container>
  );
}

export default Home;
