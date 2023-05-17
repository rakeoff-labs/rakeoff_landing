import React from "react";
import { Flex, Button, Heading, VStack, Box } from "@chakra-ui/react";
import Slider from "react-slick";
import { Navbar } from "./components"
import { Banner } from "./components/";
import { Footer } from "./components/";
import { Business } from "./components/";
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
      < Navbar/>
     
        <Heading
          as="h1"
          color="white"
          fontSize="2xl"
          fontWeight="bold"
          letterSpacing="wide"
          flexGrow={0}
        >
          RakeOff
        </Heading>
        <Flex>
          <Button variant="ghost" color="white" mr={4}>
            Tools
          </Button>
          <Button variant="ghost" color="white" mr={4}>
            GitHub
          </Button>
          {/* Add more buttons as needed */}
        </Flex>

      </Flex>
      <Flex
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Heading as="h1" color="white" fontSize="5xl" fontWeight="extrabold" textTransform="uppercase" textAlign="center">
          FIRST ICP REWARDS CONCEPT
        </Heading>
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
        < Business />
      </Flex>
      < Footer />
    </Flex>

  );
};

export default App;
