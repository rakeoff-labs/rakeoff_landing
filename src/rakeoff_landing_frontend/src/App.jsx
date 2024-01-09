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
  PromoVideo,
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
      <PromoVideo />
      <ThreeSteps />
      <MoreOnRakeoff />
      <Footer />
    </Box>
  );
};
