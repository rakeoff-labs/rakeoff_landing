import { Box } from "@chakra-ui/react";

import React from 'react';


export const Boxes = () => (
  <Box
    width="100%"
    display="grid"
    gridTemplateColumns="repeat(4, 1fr)"
    gap="24px"
    margin="24px 0 40px"
  >
    {/* Add your Box components */}
  </Box>
);

export const BoxNum = () => (
  <Box
    fontStyle="normal"
    fontWeight="600"
    fontSize="36px"
    lineHeight="40px"
    letterSpacing="0.01em"
    color="#FFFFFF"
    marginBottom="8px"
  >
    {/* Add your BoxNum content */}
  </Box>
);

export const BoxText = () => (
  <Box
    fontStyle="normal"
    fontWeight="normal"
    fontSize="18px"
    lineHeight="24px"
    letterSpacing="0.02em"
    color="rgba(255, 255, 255, 0.75)"
  >
    {/* Add your BoxText content */}
  </Box>
);

export const StyledBox = () => (
  <Box
    background="#212D45"
    borderRadius="12px"
    height="144px"
    padding="24px"
  >
    {/* Add your Box content */}
  </Box>
);

// Export other components if present
