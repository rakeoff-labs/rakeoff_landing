import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import {
  Banner,
  ThreeSteps,
  MoreOnRakeoff,
  Footer,
  RakeoffStakingFeatures,
  SocialProof,
  Stepone,
  StepTwo,
  StepThree,
  StepFour,
} from "./sections";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<AppLayout />} />
      </Routes>
    </Router>
  );
};

export default App;

const AppLayout = () => {
  return (
    <Box>
      <Banner />
      <RakeoffStakingFeatures />
      <SocialProof />

      <Stepone />
      <StepTwo />
      <StepThree />
      <StepFour />
      {/* <ThreeSteps /> */}
      <MoreOnRakeoff />
      <Footer />
    </Box>
  );
};
