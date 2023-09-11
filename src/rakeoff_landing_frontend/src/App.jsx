import React from "react";
import { Box } from "@chakra-ui/react";
import {
  Banner,
  ThreeSteps,
  MoreOnRakeoff,
  JoinTheCommunity,
  Footer,
  WhyStakeWithUs,
  DropDown,
  SocialProof,
} from "./sections";

const App = () => {
  return (
    <Box>
      <Banner />
      {/* <WhyStakeWithUs /> */}
      <DropDown />
      <ThreeSteps />
      <MoreOnRakeoff />
      <JoinTheCommunity />
      <SocialProof />
      <Footer />
    </Box>
  );
};

export default App;
