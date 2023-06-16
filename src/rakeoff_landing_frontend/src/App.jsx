import React from "react";
import { Container, Box } from "@chakra-ui/react";
import { CustomNavbar } from "./components";
import { Banner } from "./components/";
import { Footer } from "./components/";
import { Services } from "./components/";
import { Statistics } from "./components/";
import { ThreeSteps } from "./components";
import { Social } from "./components";
import { Story } from "./components/index";

import "./App.css";
import spacerocket from "./assets/spacerocket.png";

const App = () => {
  return (
    <Box
      w="100%"
      bg="#191b1f"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(25, 27, 31, 1) 0%, rgba(25, 27, 31, 0) 50%), url(${spacerocket})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <Container maxW="7xl">
        <CustomNavbar />
        <Banner />
        {/* <Statistics /> */}
        <Services />
        <ThreeSteps />
        <Story />
        <Social />
        <Footer />
      </Container>
    </Box>
  );
};

export default App;
