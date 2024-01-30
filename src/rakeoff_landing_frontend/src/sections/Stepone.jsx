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

import { ArrowForwardIcon } from "@chakra-ui/icons";
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
    <Container maxW="7xl" mt={{ base: 16, md: "8rem" }} p={0}>
      <Center mb={8}>
        <Heading
          size={{ base: "3xl", md: "3xl" }}
          mb={{ base: -12, md: 0 }}
          color="white"
        >
          How it works
        </Heading>
      </Center>
      <Stack
        align={"center"}
        spacing={{ base: 2, md: 10 }}
        py={{ base: 4, md: 0 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 2, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "3xl", lg: "5xl" }}
            mx={isDesktop ? 0 : 2}
          >
            <br />
            {isDesktop ? (
              <Text as={"span"} color={"purple.400"}>
                1. Log in with your Internet Identity
              </Text>
            ) : (
              <Text
                textAlign="center"
                mt={{ base: 2, md: 10 }}
                color={"purple.400"}
              >
                1.Log in with your Internet Identity
              </Text>
            )}
          </Heading>
          <Text
            textAlign={isDesktop ? "left" : "center"}
            color={"gray.100"}
            fontSize={isDesktop ? "xl" : "lg"}
            mt={{ base: 4, md: 0 }}
            mx={isDesktop ? 0 : 2}
          >
            Securely access the Rakeoff dApp using your Internet Identity, a
            more secure alternative to traditional email and password logins in
            Web3.
          </Text>

          <Stack
            // spacing={{ base: 1, sm: 6 }}
            align="center"
            direction={{ base: "column", sm: "row" }}
          >
            <MotionButton
              mt={{ base: 8, md: 0 }}
              rightIcon={<ArrowForwardIcon />}
              as="a"
              href="https://identity.ic0.app/"
              target="_blank"
              bg={boxBackgroundColor}
              _hover={{
                boxShadow: `0px 0px 10px 6px white`,
              }}
              boxShadow={`0px 0px 10px 3px white `}
              color="white"
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Get an Internet Identity
            </MotionButton>
          </Stack>
        </Stack>

        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"100%"}
        >
          <MotionBox
            position={"relative"}
            height={isDesktop ? "300px" : "180px"}
            rounded={"3xl"}
            width={isDesktop ? "full" : "380px"}
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
            <AspectRatio ratio={21 / 10}>
              <Image src={step1} alt="naruto" objectFit="cover" />
            </AspectRatio>
          </MotionBox>
        </Flex>
      </Stack>
    </Container>
  );
};

export default StepOne;
