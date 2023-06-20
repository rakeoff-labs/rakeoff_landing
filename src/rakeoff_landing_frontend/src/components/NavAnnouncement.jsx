import React from "react";
import {
  Box,
  Spacer,
  Flex,
  Image as ChakraImage,
  Button,
  Text,
} from "@chakra-ui/react";

const NavAnnouncement = () => {
  return (
    <Box bg="#1e1f23" w="100%" align="center">
      <Text fontSize={{ base: "md", md: "lg" }} p={3} textAlign="center">
        📢 The Rakeoff beta is launched, try it out now
      </Text>
    </Box>
  );
};

export default NavAnnouncement;
