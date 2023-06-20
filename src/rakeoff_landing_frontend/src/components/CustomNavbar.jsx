import React from "react";
import logowhite from "../assets/logowhite.png";
import {
  Box,
  Spacer,
  Flex,
  Image as ChakraImage,
  Button,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const CustomNavbar = () => {
  return (
    <Box>
      <Flex h={20} alignItems={"center"}>
        <ChakraImage alt="rakeoff logo" h={45} src={logowhite} />
        <Spacer />
        <Button
          rightIcon={<ArrowForwardIcon />}
          as="a"
          href="https://app.rakeoff.io/"
          target="_blank"
          bgGradient="linear-gradient(to-r, gray.900, #1b2030)"
          _hover={{
            bgGradient: "linear-gradient(to-r, gray.800, #1b2030)",
          }}
          boxShadow="0px 0px 10px 3px red"
          color="white"
        >
          Launch dApp
        </Button>
      </Flex>
    </Box>
  );
};

export default CustomNavbar;
