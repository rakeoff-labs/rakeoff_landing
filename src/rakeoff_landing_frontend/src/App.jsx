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
  PromoVideo,
} from "./sections";

const App = () => {
  return (
    <Box>
      <Banner />
      <RakeoffStakingFeatures />
      <SocialProof />
      <PromoVideo />
      <ThreeSteps />
      <MoreOnRakeoff />
      <JoinTheCommunity />
      <Footer />
    </Box>
  );
};

export default App;
