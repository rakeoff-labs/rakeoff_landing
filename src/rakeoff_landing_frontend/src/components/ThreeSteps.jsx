import React from "react";
import { Flex, SimpleGrid, Box, Image, Heading, useBreakpointValue } from "@chakra-ui/react";
import sign from "../assets/sign.png";
import safe1 from "../assets/safe1.png";
import reward from "../assets/reward.png";

const ThreeSteps = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex direction="column" align="center" justify="center" marginBottom="24px">
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
        marginBottom="16px"
        padding="0"
        textAlign="center"
      >
        Three Simple Steps
      </Heading>

      <SimpleGrid columns={[1, 2, 3]} spacing={[10, null, 60]}>
        <Box position="relative">
          <Image src={sign} alt="Sign In" objectFit="contain" height="200px" width="100%" />
          {!isMobile && (
            <Box
              position="absolute"
              left="calc(100% + 10px)"
              top="50%"
              transform="translateY(-50%)"
              borderTop="4px solid white"
              width="85%"
            />
          )}
          <Box textAlign="center" fontWeight="bold" mt={4} color="white">
            Sign in with Identity
          </Box>
        </Box>
        <Box position="relative">
          <Image src={safe1} alt="Stake In ICP" objectFit="contain" height="200px" width="100%" />
          {!isMobile && (
            <Box
              position="absolute"
              left="calc(100% + 10px)"
              top="50%"
              transform="translateY(-50%)"
              borderTop="4px solid white"
              width="85%"
            />
          )}
          <Box textAlign="center" fontWeight="bold" mt={4} color="white">
            Stake in ICP
          </Box>
        </Box>
        <Box position="relative">
          <Image src={reward} alt="Earn Rewards" objectFit="contain" height="200px" width="100%" />
          <Box textAlign="center" fontWeight="bold" mt={4} color="white">
            Earn Rewards
          </Box>
        </Box>
      </SimpleGrid>
    </Flex>
  );
};

export default ThreeSteps;
