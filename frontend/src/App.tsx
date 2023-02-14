import React from "react";
import styled from "styled-components";
import Routes from "./Components/Routes";

function App() {
  return (
    <Container>
      <br />
      <Routes />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
