import React from "react";
import {
  SimpleGrid,
  Box,
  Image,
  Heading,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";
import sign from "../assets/sign.png";
import safe1 from "../assets/safe1.png";
import reward from "../assets/reward.png";

const ThreeSteps = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box py={["6", "8", "12"]}>
      <Center mb={5}>
        <Heading
          bgGradient="linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)"
          bgClip="text"
          size="xl"
        >
          Three simple steps...
        </Heading>
      </Center>

      <SimpleGrid
        columns={[1, 2, 3]}
        spacing={[10, null, 60]}
        bg={"#1e1f23"}
        border={"1px solid #a5a6a7"}
        borderRadius="3xl"
        py={12}
        px={8}
      >
        <Box position="relative">
          <Image
            src={sign}
            alt="Sign In"
            objectFit="contain"
            height="200px"
            width="100%"
          />
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
            Connect Identity
          </Box>
        </Box>
        <Box position="relative">
          <Image
            src={safe1}
            alt="Stake In ICP"
            objectFit="contain"
            height="200px"
            width="100%"
          />
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
            Stake your ICP
          </Box>
        </Box>
        <Box position="relative">
          <Image
            src={reward}
            alt="Earn Rewards"
            objectFit="contain"
            height="200px"
            width="100%"
          />
          <Box textAlign="center" fontWeight="bold" mt={4} color="white">
            Earn Rewards
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default ThreeSteps;
