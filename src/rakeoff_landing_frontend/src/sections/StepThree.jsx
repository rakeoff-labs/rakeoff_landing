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
import step3 from "../../assets/step3.gif";
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
        spacing={{ base: 0, md: 10 }}
        pt={{ base: 12, lg: 20 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack
          flex={{ base: 0, md: 1 }}
          mb={{ base: 0, md: 8 }}
          spacing={{ base: 0, md: 10 }}
        >
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "3xl", lg: "5xl" }}
            mx={{ base: 2, md: 0 }}
          >
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
            textAlign={{ base: "center", md: "left" }}
            color={"gray.100"}
            mt={{ base: 4, md: 0 }}
            fontSize={{ base: "lg", md: "xl" }}
            mx={{ base: 2, md: 0 }}
          >
            With a minimum of 1 ICP, click the "Stake" button and confirm the
            amount you wish to stake. Your staked ICP will be locked and start
            earning ICP rewards.
          </Text>
        </Stack>
        <Flex
          flex={{ base: 0, md: 1 }}
          justify={isDesktop ? "center" : undefined}
          align={isDesktop ? "center" : undefined}
          position={"relative"}
          w="100%"
        >
          <MotionBox
            mb={{ base: 4, md: 0 }}
            position={"relative"}
            height={{ base: "220px", md: "300px" }}
            rounded={"2xl"}
            mx={{ base: 3, md: 0 }}
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
            {isDesktop ? (
              <AspectRatio ratio={21 / 10}>
                <Image src={step3} alt="step3" objectFit="cover" />
              </AspectRatio>
            ) : (
              <AspectRatio ratio={16 / 9}>
                <Image src={step3} alt="step1" objectFit="cover" />
              </AspectRatio>
            )}
          </MotionBox>
        </Flex>
      </Stack>
    </Container>
  );
};

export default StepThree;
