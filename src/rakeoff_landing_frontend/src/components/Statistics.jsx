import { Box, Flex } from "@chakra-ui/react";
import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../styles/';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students' },
  { number: 1900, text: 'Github Followers' },
  { number: 5000, text: 'Github Stars' }
];

const Statistics = () => (
  <Section>
    <SectionTitle>Rakeoff Statistics</SectionTitle>
    <Flex
      width="100%"
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      gap="24px"
      margin="24px 0 40px"
    >
      {data.map((card, index) => (
        <Box
          key={index}
          background="rgba(255, 255, 255, 0.26)" // Set the desired grey background color here
          borderRadius="12px"
          height="234px"
          width="253px"
          padding="24px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          transition="transform 0.3s" // Add transition property for smooth movement
          _hover={{ transform: "translateY(-5px)" }} // Define hover effect using _hover pseudo-selector
        >
          <Box
            fontStyle="normal"
            fontWeight="600"
            fontSize="36px"
            lineHeight="40px"
            letterSpacing="0.01em"
            color="#FFFFFF"
            marginBottom="8px"
          >
            {`${card.number}+`}
          </Box>
          <Box
            fontStyle="normal"
            fontWeight="normal"
            fontSize="18px"
            lineHeight="24px"
            letterSpacing="0.02em"
            color="rgba(255, 255, 255, 0.75)"
          >
            {card.text}
          </Box>
        </Box>
      ))}
    </Flex>
    <SectionDivider/>
  </Section>
);

export default Statistics;
