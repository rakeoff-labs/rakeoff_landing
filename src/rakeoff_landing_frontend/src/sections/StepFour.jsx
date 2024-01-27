import React from "react";
import {
  Heading,
  Container,
  Stack,
  Flex,
  Box,
  Text,
  Image,
  useBreakpointValue,
  AspectRatio,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import gif from "../../assets/area5.gif";
export const MotionBox = motion(Box);

import { boxBackgroundColor, boxBorderColor, boxFontColor } from "../colors";

const StepFour = () => {
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
    <Container maxW="7xl" mt={{ base: 12, md: -2 }} p={0}>
      {isDesktop ? (
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <MotionBox
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              // boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
              // boxShadow="outline"
              borderRadius="2xl"
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
                <Image src={gif} alt="naruto" objectFit="cover" />
              </AspectRatio>
            </MotionBox>
          </Flex>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            >
              <Text textAlign="center">Step 4</Text>
              <br />
              <Text as={"span"} color={"purple.400"}>
                Disburse your rewards
              </Text>
            </Heading>
            <Text color={"gray.100"} fontSize="xl">
              Earn at least 1 ICP in staking rewards and choose to disburse it
              back to ICP or enter the no-loss prize pool for a chance to boost
              earnings. The process is easy and straightforward.
            </Text>
          </Stack>
        </Stack>
      ) : (
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "5xl", sm: "4xl", lg: "5xl" }}
            >
              <Text textAlign="center">Step 4</Text>
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
              color={"gray.100"}
              mb={{ base: 4, md: 0 }}
              fontSize="md"
            >
              Earn at least 1 ICP in staking rewards and choose to disburse it
              back to ICP or enter the no-loss prize pool for a chance to boost
              earnings. The process is easy and straightforward.
            </Text>
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
              width={"full"}
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
                <Image src={gif} alt="naruto" objectFit="cover" />
              </AspectRatio>
            </MotionBox>
          </Flex>
        </Stack>
      )}
    </Container>
  );
};

export default StepFour;
