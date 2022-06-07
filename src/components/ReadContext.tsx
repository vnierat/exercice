import React, { useContext } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import { AppContext } from "../context/context";
import UserCards from "./cards/UserCardsPlaceHolder";
import UsersLoaded from "./cards/UsersLoaded";
import DefaultButton from "../components/button/Button";

const ReadContext = () => {
  const {
    state: { isDisplay },
  } = useContext(AppContext);
  console.log(isDisplay);
  return (
    <>
      <main className="main">
        <Jumbotron fluid>
          <Container fluid="md">
            <h1 className="mb-5">Keep calm, take a deep breath...</h1>
            <DefaultButton />
          </Container>
        </Jumbotron>
        <Container fluid="md">
          {isDisplay ? <UsersLoaded /> : <UserCards />}
        </Container>
      </main>
    </>
  );
};

export default ReadContext;
