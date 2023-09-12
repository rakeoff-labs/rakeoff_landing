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
      <ThreeSteps />
      <MoreOnRakeoff />
      <JoinTheCommunity />
      <SocialProof />
      <Footer />
    </Box>
  );
};

export default App;
