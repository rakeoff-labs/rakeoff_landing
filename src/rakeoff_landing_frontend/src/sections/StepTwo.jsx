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
import gif from "../../assets/area2.gif";
import { boxBackgroundColor, boxBorderColor } from "./../colors";

export const MotionBox = motion(Box);
const StepTwo = () => {
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
          <Stack flex={1} spacing={{ base: 5, md: 10 }} align="end">
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "5xl", sm: "4xl", lg: "5xl" }}
            >
              <br />
              <Text as={"span"} color={"purple.400"}>
                2. Add a minimum of 1 ICP to your wallet
              </Text>
            </Heading>
            <Text color={"gray.100"} fontSize="xl">
              To transfer ICP to your wallet, click 'Receive', copy your wallet
              address, then paste it into the exchange platform's field and
              enter the amount of ICP you wish to transfer.
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
          <Stack flex={1} spacing={{ base: 2, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "5xl", sm: "4xl", lg: "5xl" }}
            >
              <Text textAlign="center" mt={{ base: 12, md: 1 }}>
                Step 2
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
                  2. Add a minimum of 1 ICP to your wallet
                </Text>
              )}
            </Heading>
            <Text
              textAlign={isDesktop ? "left" : "center"}
              color={"gray.100"}
              mb={{ base: 4, md: 0 }}
              fontSize="lg"
            >
              To transfer ICP to your wallet, click 'Receive', copy your wallet
              address, then paste it into the exchange platform's field and
              enter the amount of ICP you wish to transfer.
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

export default StepTwo;
