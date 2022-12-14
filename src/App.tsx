import React from 'react';
import Flex from "./components/atoms/Flex";
import SignIn from "./components/pages/SignIn/SignIn";

function App() {
  return (
    <Flex
        height={'100vh'}
        width={'100vw'}
        justifyContent={'center'}
        alignItems={'center'}
    >
      <SignIn />
    </Flex>
  );
}

export default App;
