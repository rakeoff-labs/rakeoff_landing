import React from "react";
import { motion } from "framer-motion";
import {
  Heading,
  Center,
  Container,
  Stack,
  Flex,
  Box,
  useBreakpointValue,
  Text,
  Button,
  Image,
  AspectRatio,
  useColorModeValue,
} from "@chakra-ui/react";
import step1 from "../../assets/step1.gif";
export const MotionButton = motion(Button);
import { boxBackgroundColor, boxBorderColor } from "../colors";

export const MotionBox = motion(Box);
const StepOne = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
      <Center mb={8}>
        <Heading size={{ base: "2xl", md: "3xl" }} color="white">
          How does it work?
        </Heading>
      </Center>
      <Stack
        align={"center"}
        spacing={{ base: 0, md: 10 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={{ base: 0, md: 1 }} spacing={{ base: 0, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "3xl", lg: "5xl" }}
            mx={{ base: 2, md: 0 }}
          >
            {isDesktop ? (
              <Text as={"span"} color={"purple.400"}>
                1. Log in with your Internet Identity
              </Text>
            ) : (
              <Text
                textAlign="center"
                mb={{ base: 2, md: 1 }}
                color={"purple.400"}
              >
                1. Log in with your Internet Identity
              </Text>
            )}
          </Heading>
          <Text
            textAlign={{ base: "center", md: "left" }}
            color={"gray.100"}
            fontSize={{ base: "lg", md: "xl" }}
            mt={{ base: 4, md: 0 }}
            mx={{ base: 2, md: 0 }}
          >
            Access the Rakeoff dApp securely using your Internet Identity, which
            offers a more secure option compared to traditional email and
            password logins in the Web2 space.
          </Text>
        </Stack>

        <Flex
          flex={{ base: 0, md: 1 }}
          justify={isDesktop ? "center" : undefined}
          align={isDesktop ? "center" : undefined}
          position={"relative"}
          w={"100%"}
        >
          <MotionBox
            position={"relative"}
            mb={{ base: 4, md: 0 }}
            height={{ base: "220px", md: "300px" }}
            rounded={"2xl"}
            width={"full"}
            mx={{ base: 3, md: 0 }}
            overflow={"hidden"}
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            bg={boxBackgroundColor}
            border={boxBorderColor}
            borderColor="black"
            boxShadow={useColorModeValue(
              "10px 10px 0 purple",
              "10px 10px 0 blueviolet"
            )}
          >
            {isDesktop ? (
              <AspectRatio ratio={21 / 10}>
                <Image src={step1} alt="step1" objectFit="cover" />
              </AspectRatio>
            ) : (
              <AspectRatio ratio={16 / 9}>
                <Image src={step1} alt="step1" objectFit="cover" />
              </AspectRatio>
            )}
          </MotionBox>
        </Flex>
      </Stack>
    </Container>
  );
};

export default StepOne;
