import React from "react";
import {
  Heading,
  Container,
  Stack,
  Flex,
  Box,
  Button,
  Text,
  Image,
  useBreakpointValue,
  AspectRatio,
  useColorModeValue,
} from "@chakra-ui/react";
import gif from "../../assets/step3.gif";
export const MotionButton = motion(Button);

import { boxBackgroundColor, boxBorderColor } from "../colors";

import { motion } from "framer-motion";
export const MotionBox = motion(Box);
const StepThree = () => {
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
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 4, md: 20 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "3xl", lg: "5xl" }}
            mx={isDesktop ? 0 : 2}
          >
            <br />
            {isDesktop ? (
              <Text as={"span"} color={"purple.400"}>
                3. Just click 'Stake'
              </Text>
            ) : (
              <Text
                textAlign="center"
                mb={{ base: 2, md: 1 }}
                color={"purple.400"}
              >
                3. Just click 'Stake'
              </Text>
            )}
          </Heading>
          <Text
            textAlign={isDesktop ? "left" : "center"}
            color={"gray.100"}
            mt={{ base: 4, md: 0 }}
            fontSize={isDesktop ? "xl" : "lg"}
            mx={isDesktop ? 0 : 2}
          >
            Stake a minimum of 1 ICP, with a 6-month lock-in period. We simplify
            the process by removing complexities behind the scenes making your
            staking experience that simple.
          </Text>

          <Stack
            spacing={{ base: 1, sm: 6 }}
            align="center"
            direction={{ base: "column", sm: "row" }}
          ></Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w="100%"
        >
          <MotionBox
            mb={isDesktop ? 0 : 4}
            position={"relative"}
            height={isDesktop ? "300px" : "180px"}
            rounded={"2xl"}
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
              <Image src={gif} alt="naruto" objectFit="cover" />
            </AspectRatio>
          </MotionBox>
        </Flex>
      </Stack>
    </Container>
  );
};

export default StepThree;
