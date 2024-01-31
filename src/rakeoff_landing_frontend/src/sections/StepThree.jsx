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
        py={{ base: 0, md: 28 }}
        direction={{ base: "column", md: "row" }}
        pt={{ base: 6, md: 0 }}
      >
        <Stack flex={{ base: 0, md: 1 }} spacing={{ base: 0, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "3xl", lg: "5xl" }}
            mx={isDesktop ? 0 : 2}
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
        </Stack>
        <Flex
          flex={{ base: 0, md: 1 }}
          justify={isDesktop ? "center" : undefined}
          align={isDesktop ? "center" : undefined}
          position={"relative"}
          w="100%"
        >
          <MotionBox
            mb={isDesktop ? 0 : 4}
            position={"relative"}
            height={isDesktop ? "300px" : "158px"}
            rounded={"2xl"}
            mx={isDesktop ? 0 : 3}
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
              <Image src={step3} alt="step3" objectFit="cover" />
            </AspectRatio>
          </MotionBox>
        </Flex>
      </Stack>
    </Container>
  );
};

export default StepThree;
