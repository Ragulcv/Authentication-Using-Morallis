
import { Button,Text, Stack, Alert, AlertIcon, Box, AlertTitle, AlertDescription, CloseButton, Input } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import { stack } from "@chakra-ui/layout";
import { useState,  } from "react";


const SignUp = () => {
  const { signup } = useMoralis();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  return (
    <Stack spacing={3}>
      <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.currentTarget.value)} />
      <Input placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.currentTarget.value)} />
      <Button onClick={() => signup(email, password, email)}>Sign up</Button>
    </Stack>
  );
};

const Login = () => {
  const { login } = useMoralis();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  return (
    <Stack spacing={3}>
      <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.currentTarget.value)} />
      <Input placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.currentTarget.value)} />
      <Button onClick={() => login(email, password)}>Login</Button>
    </Stack>
  );
};

export const Auth = () => {
    const { authenticate, isAuthenticating,authError } = useMoralis();

    return <Stack spacing={6}>
    {authError && (
        <Alert status='error'>
        <AlertIcon />
        <Box flex="1">
          <AlertTitle>Authentication has failed</AlertTitle>
          <AlertDescription display="block">{authError.message}</AlertDescription>
        </Box>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
  )}
    <Button isLoading={isAuthenticating} onClick={() => authenticate()}>
    Authenticate Via Metamask
  </Button> 
  <Text textAlign={"center"} textDecoration={"Highlight"}>
    <em>or</em>
</Text>
<SignUp />
<Text textAlign={"center"} textDecoration={"Highlight"}>
    <em>or</em>
</Text>
<Login />
    </Stack>
}