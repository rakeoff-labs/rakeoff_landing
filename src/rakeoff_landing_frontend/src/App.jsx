import React from "react";
import { Box } from "@chakra-ui/react";
import {
  Banner,
  ThreeSteps,
  MoreOnRakeoff,
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

      <Footer />
    </Box>
  );
};

export default App;
