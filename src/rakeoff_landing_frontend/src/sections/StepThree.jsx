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
} from "@chakra-ui/react";
import gif from "../../assets/area4.gif";

import { boxBackgroundColor, boxBorderColor, boxFontColor } from "../colors";

import { motion } from "framer-motion";
import screen from "../../assets/stk2.png";
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
    <Container maxW="7xl" mt={{ base: 12, md: -2 }} p={0}>
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
            <Text textAlign="center">Step 3</Text>
            <br />
            {isDesktop ? (
              <Text as={"span"} color={"purple.400"}>
                Simply click 'Stake'
              </Text>
            ) : (
              <Text
                textAlign="center"
                mb={{ base: 2, md: 0 }}
                color={"purple.400"}
              ></Text>
            )}
          </Heading>
          <Text
            textAlign={isDesktop ? "left" : "center"}
            color={"gray.500"}
            mb={{ base: 4, md: 0 }}
          >
            Staking with a minimum of 1 ICP is essential for earning rewards,
            and the amount is locked for at least 6 months. We streamline the
            process by eliminating complexities like the 'dissolve delay',
            simplifying your staking experience.
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
