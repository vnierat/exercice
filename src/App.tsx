import React, { useContext, useEffect, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import DefaultButton from "./components/button/Button";
import UserCards from "./components/cards/UserCardsPlaceHolder";
import { AppContext, AppProvider } from "./context/context";
import UsersLoaded from "./components/cards/UsersLoaded";
import { UseGetUsers } from "./api/usersList";

function App() {
  const { state } = useContext(AppContext);

  const [stateData] = useState(state);

  useEffect(() => {
    console.log(stateData);
  }, [stateData]);

  const { isDisplay } = stateData;

  return (
    <AppProvider>
      <main className="main">
        <Jumbotron fluid>
          <Container fluid="md">
            <h1 className="mb-5">Keep calm, take a deep breath...</h1>
            <DefaultButton />
          </Container>
        </Jumbotron>
        <Container fluid="md">
          {!isDisplay ? <UsersLoaded /> : <UserCards />}
        </Container>
      </main>
    </AppProvider>
  );
}

export default App;
