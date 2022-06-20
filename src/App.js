
import { Button } from "@chakra-ui/react";
import { useMoralis} from "react-moralis";
import { Container, Heading } from "@chakra-ui/layout";
//import { useState } from "react";
import {Auth} from './Auth';

function App() {
  const { isAuthenticated,logout } = useMoralis();

  if(isAuthenticated) {
    return(
      <Container>
        <Heading>Welcome to my Demo Application</Heading>
        <Button onClick={() => logout()}>Logout</Button>  
      </Container>
    );
  }
  
  return (
    <Container>
    <Heading mb={6}>Welcome to my Demo Application</Heading>
    <Auth/>
    </Container>
  );
  
}

export default App;

