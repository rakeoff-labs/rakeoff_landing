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
        <Button rightIcon={<ArrowForwardIcon />} colorScheme="red" isDisabled>
          Launching soon
        </Button>
      </Flex>
    </Box>
  );
};

export default CustomNavbar;
