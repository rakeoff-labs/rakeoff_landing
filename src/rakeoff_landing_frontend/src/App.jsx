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
import SocialProof from "./sections/SocialProof";

const App = () => {
  return (
    <Box>
      <Banner />
      {/* <Statistics /> */}
      {/* <WhatDoWeOffer /> */}
      <SocialProof />
      <WhyStakeWithUs />
      <ThreeSteps />
      <MoreOnRakeoff />
      <JoinTheCommunity />
      <Footer />
    </Box>
  );
};

export default App;
