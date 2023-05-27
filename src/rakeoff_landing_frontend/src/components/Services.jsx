import React, { useContext } from "react";
import { Box, Container, Text, Heading } from "@chakra-ui/react";
import Card from "./Card";
import cryptologo from "../assets/cryptologo.png";
import { themeContext } from "../Context";
import { motion } from "framer-motion";
import one from "../assets/one.png";
import fix1 from "../assets/fix1.png";
import icpbit from "../assets/icpbit.png";
import Logo_MAIN from "../assets/Logo_MAIN.png";
import ICP from "../assets/ICP.png";


const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme && theme.state ? theme.state.darkMode : false;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <Box
      className="services"
      id="services"
      padding="0 3rem 0 3rem"
      display="flex"
      height="30rem"
      fontWeight="700"
      color="white"
      marginBottom="8rem"
      marginTop="9rem"
     
      /* scroll view */
      paddingTop="3rem"
    >
      {/* left side */}
      <Box className="awesome" display="flex" flexDirection="column" position="relative">
        {/* dark mode */}
        <Heading
          as="h3"
          size="xl"
          fontWeight="800"
          fontSize="56px"
          lineHeight="56px"
          width="max-content"
          maxW="100%"
          bgGradient="linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)"
          bgClip="text"
          color="transparent"
          marginBottom="16px"
          padding="0"
          textAlign="center"
        >
          Services
        </Heading>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </Box>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={ICP}
            heading={"Earn ICP Rewards"}
            detail={"Pooled investments together to earn some ICP!"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={fix1}
            heading={"100% No loss"}
            detail={"a completely secure and safe service to invest your money"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={icpbit}
            heading={"Convert BTC at low fees"}
            detail={
              "Exchange your ICP money into BTC for a low rate of 3%"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </Box>
  );
};

export default Services;
