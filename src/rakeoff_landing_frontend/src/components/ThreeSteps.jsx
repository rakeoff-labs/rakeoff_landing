import React from "react";
import {
  Stack,
  Box,
  Image,
  Heading,
  useBreakpointValue,
  Center,
  Container,
  Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowDownIcon } from "@chakra-ui/icons";
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

      <Stack
        direction={{ base: "column", md: "row" }}
        bg={boxBackgroundColor}
        border={boxBorderColor}
        borderRadius="3xl"
        py={12}
        px={8}
        gap={10}
        mx={{ base: 3, md: 3, lg: 0 }}
        justify="space-around"
        align="center"
      >
        <StepBox
          image={identityIcon}
          text={"Create / connect your Internet Identity."}
        />
        {isMobile ? (
          <ArrowDownIcon boxSize={10} color="white" />
        ) : (
          <ArrowForwardIcon boxSize={10} color="white" />
        )}
        <StepBox
          image={stakingSafe}
          text={"Stake your ICP and wait for rewards."}
        />
        {isMobile ? (
          <ArrowDownIcon boxSize={10} color="white" />
        ) : (
          <ArrowForwardIcon boxSize={10} color="white" />
        )}
        <StepBox
          image={rewardsIcon}
          text={"Choose from the disbursement options."}
        />
      </Stack>
    </Container>
  );
};

export default ThreeSteps;

const StepBox = ({ image, text }) => {
  return (
    <Box position="relative" align="center">
      <Image src={image} alt={text} h={{ base: 150, md: 150, lg: 200 }} />
      <Text textAlign="center" mt={4} noOfLines={2} color={boxFontColor}>
        {text}
      </Text>
    </Box>
  );
};
