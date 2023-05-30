import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Flex, Button, Heading, VStack, Box } from "@chakra-ui/react";
import Slider from "react-slick";
import { CustomNavbar } from "./components";
import { Banner } from "./components/";
import { Footer } from "./components/";
import { Services } from "./components/";
import { Statistics } from "./components/";
import { FAQ } from "./components/";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Flex direction="column" minHeight="100vh" bg="#121212">
        <Flex py={4} px={8} justifyContent="space-between" alignItems="center" flexGrow={0}>
          <CustomNavbar />
        </Flex>
        <Flex flexGrow={1} justifyContent="center" alignItems="center" flexDirection="column">
          <Banner />
          <Statistics />
          <Services />
          <FAQ />
        </Flex>
        <Footer />
      </Flex>
    </Router>
  );
};

export default App;
