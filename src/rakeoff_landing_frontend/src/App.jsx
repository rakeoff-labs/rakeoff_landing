import React from "react";
import { Box } from "@chakra-ui/react";
import { Banner } from "./components/";
import { Footer } from "./components/";
import { Services } from "./components/";
import { ThreeSteps } from "./components";
import { Social } from "./components";
import { Story } from "./components/index";

const App = () => {
  return (
    <Box>
      <Banner />
      <Services />
      <ThreeSteps />
      <Story />
      <Social />
      <Footer />
    </Box>
  );
};

export default App;
