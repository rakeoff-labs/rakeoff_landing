import React from "react";
import { Box } from "@chakra-ui/react";
import {
  Banner,
  ThreeSteps,
  MoreOnRakeoff,
  JoinTheCommunity,
  Footer,
  RakeoffStakingFeatures,
  SocialProof,
} from "./sections";

const App = () => {
  return (
    <Box>
      <Banner />
      <RakeoffStakingFeatures />
      <SocialProof />
      <ThreeSteps />
      <MoreOnRakeoff />
      <JoinTheCommunity />
      <Footer />
    </Box>
  );
};

export default App;
