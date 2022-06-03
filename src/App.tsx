import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import DefaultButton from "./components/button/Button";
import UserCards from "./components/cards/UserCards";
// https://react-bootstrap.github.io

function App() {
  return (
    <main className="main">
      <Jumbotron fluid>
        <Container fluid="md">
          <h1 className="mb-5">Keep calm, take a deep breath...</h1>
          <DefaultButton />
        </Container>
      </Jumbotron>
      <Container fluid="md">
        <UserCards />
      </Container>
    </main>
  );
}

export default App;
