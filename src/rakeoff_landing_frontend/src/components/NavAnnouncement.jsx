import React from "react";
import { Box, Text } from "@chakra-ui/react";

const NavAnnouncement = () => {
  return (
    <Box bg="#1e1f23" w="100%" align="center">
      <Text
        fontSize={{ base: "md", md: "lg" }}
        color="white"
        p={3}
        textAlign="center"
      >
        📢 The Rakeoff beta is launched, try it out now
      </Text>
    </Box>
  );
};

export default NavAnnouncement;
