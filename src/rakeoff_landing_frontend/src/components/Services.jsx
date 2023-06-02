import React, { useContext } from "react";
import { Box, Container, Text, Heading, HStack, Center } from "@chakra-ui/react";
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
    <Container as="section" py={["4", "8", "12"]} textAlign="center">
      {/* heading */}
      <Center>
        <Heading
          as="h3"
          size="xl"
          fontWeight="800"
          fontSize={["40px", "40px", "48px"]}
          lineHeight={["44px", "48px", "56px"]}
          width="max-content"
          maxW="100%"
          bgGradient="linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)"
          bgClip="text"
          color="transparent"
          marginBottom="16px" // Add margin-bottom for spacing
          padding="0"
        >
          Services
        </Heading>
      </Center>

      {/* cards */}
      <HStack spacing={["2", "4", "6"]} justifyContent="center">
        {/* first card */}
        <motion.div
          initial={{ left: ["50%", "25%", "14%"], top: ["0", "0", "0"] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
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
          initial={{ left: ["50%", "-11%", "-4%"], top: ["0", "0", "0"] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={transition}
        >
          <Card
            emoji={fix1}
            heading={"100% No loss"}
            detail={"A completely secure and safe service to invest your money"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: ["0", "0", "0"], left: ["50%", "25%", "12%"] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={transition}
        >
          <Card
            emoji={icpbit}
            heading={"Convert BTC at low fees"}
            detail={"Exchange your ICP money into BTC for a low rate of 3%"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>

        {/* fourth */}
        <motion.div
          initial={{ top: ["0", "0", "0"], left: ["0", "0", "0"] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={transition}
        >
          <Card
            emoji={one}
            heading={"Secure Transactions"}
            detail={"Your transactions are secured with the latest encryption technology"}
            color="rgba(80, 144, 252, 0.45)"
          />
        </motion.div>
      </HStack>
    </Container>
  );
};

export default Services;
