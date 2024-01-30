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
import gif from "../../assets/step4.gif";
export const MotionBox = motion(Box);

import { boxBackgroundColor, boxBorderColor } from "./../colors";

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
    <Container maxW="7xl" mt={{ base: 12, md: 2 }} p={0}>
      {isDesktop ? (
        <Stack
          align={"center"}
          spacing={{ base: 2, md: 10 }}
          py={{ base: 20, md: 20 }}
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
              width={"full"}
              overflow={"hidden"}
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
              fontSize={{ base: "5xl", sm: "4xl", lg: "5xl" }}
            >
              <Text as={"span"} color={"purple.400"}>
                4. Disburse your rewards
              </Text>
            </Heading>
            <Text color={"gray.100"} fontSize="xl">
              Earn at least 1 ICP in staking rewards and choose to disburse it
              back to ICP or enter the no-loss prize pool for a chance to boost
              earnings. The process is easy and straightforward.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            ></Stack>
          </Stack>
        </Stack>
      ) : (
        ////////MOBILE///////
        ////////////////////
        <Stack
          align={"center"}
          spacing={{ base: 2, md: 10 }}
          py={{ base: 4, md: 0 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "3xl", lg: "5xl" }}
              mx={isDesktop ? 0 : 2}
            >
              <Text
                textAlign="center"
                mt={{ base: 8, md: 0 }}
                color={"purple.400"}
              >
                4. Disburse your rewards
              </Text>
            </Heading>
            <Text
              textAlign={isDesktop ? "left" : "center"}
              color={"gray.100"}
              mt={2}
              fontSize="lg"
              mx={isDesktop ? 0 : 2}
            >
              Earn at least 1 ICP in rewards and disburse it back to ICP or
              enter our no-loss prize pool for a chance to earn more.
            </Text>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"100%"}
          >
            <MotionBox
              mb={4}
              position={"relative"}
              height={isDesktop ? "300px" : "180px"}
              rounded={"2xl"}
              width={"380px"}
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
