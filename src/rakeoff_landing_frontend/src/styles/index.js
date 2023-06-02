import { Box, Flex } from "@chakra-ui/react";
import React from 'react';

export const Section = (props) => (
  <Flex
  display={props.grid ? "grid" : "flex"}
  flexDirection={props.row ? "row" : "column"}
  padding={props.nopadding ? "0" : "32px 48px 0"}
  margin="0 auto"
  maxW="1200px" // Updated max width to match Services section
  boxSizing="content-box"
  position="relative"
  overflow="hidden"
  justifyContent="center" // Center the content horizontally
  alignItems="center" // Center the content vertically
  gridTemplateColumns="repeat(4, 1fr)" // Adjust the number of columns if needed
  gap="24px" // Adjust the gap between items if needed
  {...props}
/>
);

export const SectionTitle = (props) => (
  <Box
    fontWeight="800"
    fontSize={props.main ? "65px" : "56px"}
    lineHeight={props.main ? "72px" : "56px"}
    width="max-content"
    maxW="100%"
    bgGradient="linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)"
    bgClip="text"
    color="transparent"
    marginBottom="16px"
    padding={props.main ? "58px 0 16px" : "0"}
    {...props}
  />
);

export const SectionText = (props) => (
  <Box
    maxW="800px"
    fontSize="24px"
    lineHeight="40px"
    fontWeight="300"
    paddingBottom="3.6rem"
    color="rgba(255, 255, 255, 0.5)"
    {...props}
  />
);

export const SectionDivider = (props) => (
  <Box
    width="64px"
    height="6px"
    borderRadius="10px"
    backgroundColor="#fff"
    background={props.colorAlt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}
    margin={props.divider ? "4rem 0" : ""}
    {...props}
  />
);
