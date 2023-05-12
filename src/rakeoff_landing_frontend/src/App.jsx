import React from "react";
import { Flex, Center, Button, Heading, VStack } from "@chakra-ui/react";

const App = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" bg="black">
      <Center>
        <VStack gap="10">
          <Heading
            textAlign="center"
            bgGradient="linear-gradient(129.48deg, #ff9494ff 0%, #800000ff 100%)"
            bgClip="text"
            fontSize="5xl"
            fontWeight="extrabold"
          >
            RakeOff ICP dApp
          </Heading>
          <Button
            as="a"
            href="https://app.rakeoff.io/"
            colorScheme="red"
            size="lg"
          >
            Enter dApp
          </Button>
        </VStack>
      </Center>
    </Flex>
  );
};

export default App;
