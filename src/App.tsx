import React from 'react';
import Flex from "./components/atoms/Flex";
import Button from "./components/atoms/Button/Button";

function App() {
  return (
    <Flex
    >
      <Button onClick={() => console.log('kek')}>click on me</Button>
    </Flex>
  );
}

export default App;
