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
  Features,
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
      <BackgroundSection>
        <Banner />

        {/* <RakeoffStakingFeatures /> */}

        <Features />

        <Stepone />
        <StepTwo />
        <StepThree />
        <StepFour />

        {/* <SocialProof /> */}
        {/* <ThreeSteps /> */}
        <MoreOnRakeoff />
        <Footer />
      </BackgroundSection>
    </Box>
  );
};

const BackgroundSection = ({ children }) => {
  return (
    <Box
      bg="linear-gradient(#292e40 2px, transparent 1px), linear-gradient(to right, #292e40 2px, #1b2030 1px)"
      backgroundSize=" 120px 120px"
    >
      {children}
    </Box>
  );
};
