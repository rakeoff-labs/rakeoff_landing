import React from "react";
import { Box } from "@chakra-ui/react";
import {
  Banner,
  WhatDoWeOffer,
  ThreeSteps,
  MoreOnRakeoff,
  JoinTheCommunity,
  Footer,
} from "./sections";

const App = () => {
  return (
    <Box>
      <Banner />
      <WhatDoWeOffer />
      <ThreeSteps />
      <MoreOnRakeoff />
      <JoinTheCommunity />
      <Footer />
    </Box>
  );
};

export default App;
