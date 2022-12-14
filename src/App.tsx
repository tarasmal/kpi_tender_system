import React from 'react';
import Flex from "./components/atoms/Flex";
import SignUp from "./components/pages/SignUp/SignUp";

function App() {
  return (
    <Flex
        height={'100vh'}
        width={'100vw'}
        justifyContent={'center'}
        alignItems={'center'}
    >
      <SignUp />
    </Flex>
  );
}

export default App;
