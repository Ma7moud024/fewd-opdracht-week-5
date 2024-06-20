import { useState } from "react";
import "./App.css";

import styled from "styled-components";
import BribeForm from "./BribeForm";
import Bribe from "./Bribe";

const Title = styled.h1`
  font-family: Avenir Next, Helvetica, Futura, Arial;
`;

function App() {
  const [bribes, setBribes] = useState([]);
  return (
    <>
      <Title>I paid a bribe</Title>
      <BribeForm addBribe={(bribe) => setBribes([...bribes, bribe])} />
      {bribes.map((bribe) => (
        <Bribe bribe={bribe} />
      ))}
    </>
  );
}

export default App;
