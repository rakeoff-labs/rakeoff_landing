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
} from "@chakra-ui/react";
import gif from "../../assets/area.gif";
import { ArrowForwardIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { boxBackgroundColor, boxBorderColor, boxFontColor } from "../colors";

import screen from "../../assets/identity.png";
export const MotionBox = motion(Box);
const Stepone = () => {
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
          //   mt={{ base: 16, md: "8rem" }}
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
            fontSize={{ base: "5xl", sm: "4xl", lg: "5xl" }}
          >
            <Text textAlign="center" mt={{ base: 12, md: 0 }}>
              Step 1
            </Text>
            <br />
            {isDesktop ? (
              <Text as={"span"} color={"purple.400"}>
                Log in with your Internet Identity
              </Text>
            ) : (
              <Text
                textAlign="center"
                mb={{ base: 2, md: 0 }}
                color={"purple.400"}
              >
                Log in with your Internet Identity
              </Text>
            )}
          </Heading>
          <Text
            textAlign={isDesktop ? "left" : "center"}
            color={"gray.500"}
            mb={{ base: 4, md: 0 }}
          >
            Access the Rakeoff dApp securely with your Internet Identity, the
            preferred alternative to traditional email and password logins in
            the Web3 ecosystem.
          </Text>
          <Stack
            spacing={{ base: 1, sm: 6 }}
            align="center"
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              align="center"
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              rightIcon={<ArrowForwardIcon h={4} w={4} color={"gray.300"} />}
            >
              Get an Internet Identity
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={isDesktop ? "100%" : 400}
        >
          <MotionBox
            position={"relative"}
            height={isDesktop ? "300px" : "200px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            bg={boxBackgroundColor}
            border={boxBorderColor}
          >
            {/* <Image
              alt={"Hero Image"}
              fit={isDesktop ? "cover" : "scale-down"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={screen}
            /> */}
            <AspectRatio ratio={21 / 10}>
              <Image src={gif} alt="naruto" objectFit="cover" />
            </AspectRatio>
          </MotionBox>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Stepone;
