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
import person from "../../assets/person.svg";
import bank from "../../assets/bank.svg";
import trophy from "../../assets/trophy.svg";
import { boxBackgroundColor, boxBorderColor, boxFontColor } from "../colors";

const ThreeSteps = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
      <Center mb={8}>
        <Heading size={{ base: "2xl", md: "3xl" }}>
          Three Simple Steps
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
          image={person}
          text={"1. Create / connect your Internet Identity."}
        />
        {isMobile ? (
          <ArrowDownIcon boxSize={10} color="white" />
        ) : (
          <ArrowForwardIcon boxSize={10} color="white" />
        )}
        <StepBox
          image={bank}
          text={"2. Stake your ICP and wait for rewards."}
        />
        {isMobile ? (
          <ArrowDownIcon boxSize={10} color="white" />
        ) : (
          <ArrowForwardIcon boxSize={10} color="white" />
        )}
        <StepBox image={trophy} text={"3. Choose a disbursement option."} />
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
