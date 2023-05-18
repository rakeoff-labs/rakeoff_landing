import React from "react";
import { Flex, Button, Heading, VStack, Box } from "@chakra-ui/react";
import Slider from "react-slick";
import { CustomNavbar } from "./components"
import { Banner } from "./components/";
import { Footer } from "./components/";
import { Services } from "./components/";

import './App.css';

const App = () => {
  return (
    <Flex direction="column" minHeight="100vh" bgGradient="linear-gradient(180deg, #8B0000, #000000)">
      <Flex
        py={4}
        px={8}
        justifyContent="space-between"
        alignItems="center"
        flexGrow={0}
      >
      < CustomNavbar/>
  
    </Flex>
      <Flex
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
       
        < Banner />
        <Button
          as="a"
          href="https://app.rakeoff.io/"
          colorScheme="red"
          size="lg"
          mt={8}
        >
          Enter dApp
        </Button>
        < Services />
       
      </Flex>
      < Footer />
    </Flex>

  );
};

export default App;
