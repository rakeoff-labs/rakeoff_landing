import React from "react";
import {
  SimpleGrid,
  Box,
  Image,
  Heading,
  useBreakpointValue,
  Center,
  Container,
} from "@chakra-ui/react";
import identityIcon from "../../assets/identity_icon.png";
import stakingSafe from "../../assets/staking_safe.png";
import rewardsIcon from "../../assets/rewards_icon.png";
import { boxBackgroundColor, boxBorderColor, boxFontColor } from "./Color";

const ThreeSteps = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Container maxW="7xl" mt={12} p={0}>
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
        bg={boxBackgroundColor}
        border={boxBorderColor}
        borderRadius="3xl"
        py={12}
        px={8}
        mx={{ base: 3, md: 0 }}
      >
        <Box position="relative">
          <Image
            src={identityIcon}
            alt="connect identity"
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
          <Box textAlign="center" mt={4} color={boxFontColor}>
            Create / connect your Internet Identity.
          </Box>
        </Box>
        <Box position="relative">
          <Image
            src={stakingSafe}
            alt="Stake your ICP"
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
          <Box textAlign="center" mt={4} color={boxFontColor}>
            Stake your ICP and wait for rewards.
          </Box>
        </Box>
        <Box position="relative">
          <Image
            src={rewardsIcon}
            alt="Earn Rewards"
            objectFit="contain"
            height="200px"
            width="100%"
          />
          <Box textAlign="center" mt={4} color={boxFontColor}>
            Choose from the disbursement options.
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default ThreeSteps;
