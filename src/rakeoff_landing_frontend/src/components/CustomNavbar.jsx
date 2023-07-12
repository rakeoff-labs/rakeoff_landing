import React from "react";
import logowhite from "../../assets/logo_name_white.png";
import {
  Container,
  Spacer,
  Flex,
  Image as ChakraImage,
  Button,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { boxBackgroundColor } from "./Color";

const CustomNavbar = () => {
  return (
    <Container maxW="7xl">
      <Flex h={20} alignItems={"center"}>
        <ChakraImage alt="rakeoff logo" h={45} src={logowhite} />
        <Spacer />
        <Button
          rightIcon={<ArrowForwardIcon />}
          as="a"
          href="https://app.rakeoff.io/"
          target="_blank"
          bg={boxBackgroundColor}
          _hover={{
            boxShadow: "0px 0px 10px 6px red",
          }}
          boxShadow="0px 0px 10px 3px red"
          color="white"
        >
          Launch dApp
        </Button>
      </Flex>
    </Container>
  );
};

export default CustomNavbar;
