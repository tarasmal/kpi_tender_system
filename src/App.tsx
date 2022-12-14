import React from 'react';
import Flex from "./components/atoms/Flex";
import Router from "./Router";

function App() {
  return (
    <Flex
        height={'100vh'}
        width={'100vw'}
        justifyContent={'center'}
        alignItems={'center'}
    >
      <Router />
    </Flex>
  );
}

export default App;
