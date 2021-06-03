import { Container } from "reactstrap";
import React from "react";

import Header from "./components/Header";
import Routes from "./Routes";

import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Routes />
      </Container>
    </React.Fragment>
  );
};

export default App;
