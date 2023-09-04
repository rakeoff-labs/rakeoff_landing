import React from "react";
import { Box } from "@chakra-ui/react";
import {
  Banner,
  Statistics,
  WhatDoWeOffer,
  ThreeSteps,
  MoreOnRakeoff,
  JoinTheCommunity,
  Footer,
  WhyStakeWithUs,
} from "./sections";

const App = () => {
  return (
    <Box>
      <Banner />
      {/* <Statistics /> */}
      {/* <WhatDoWeOffer /> */}
      <WhyStakeWithUs />
      <ThreeSteps />
      <MoreOnRakeoff />
      <JoinTheCommunity />
      <Footer />
    </Box>
  );
};

export default App;
