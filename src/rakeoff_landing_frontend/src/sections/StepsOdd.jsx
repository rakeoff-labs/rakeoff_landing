import React from "react";
import { boxBackgroundColor, boxBorderColor } from "../colors";
import { motion } from "framer-motion";
import {
  Heading,
  Stack,
  Flex,
  useBreakpointValue,
  Text,
  Image,
  AspectRatio,
  useColorModeValue,
  Box,
  Container,
} from "@chakra-ui/react";

export const MotionBox = motion(Box);
const StepsOdd = ({ heading, description, stepgif, first }) => {
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
    <Container
      maxW="7xl"
      mb={{ base: 12, md: 0 }}
      mt={
        first
          ? { base: 8, md: null, lg: null, xl: null }
          : { base: 12, md: 4, lg: 12, xl: "5rem" }
      }
      p={0}
    >
      <Stack
        align={"center"}
        spacing={{ base: 0, md: 10 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={{ base: 0, md: 1 }} spacing={{ base: 0, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", md: "2xl", lg: "4xl", xl: "5xl" }}
            mx={{ base: 2, md: 0 }}
          >
            <Text
              mt={{ base: 0, md: 12, lg: 12, xl: 0 }}
              textAlign={{
                base: "center",
                md: "center",
                lg: "center",
                xl: "start",
              }}
              mb={{ base: 2, md: 0, lg: 2, xl: 0 }}
              color={"purple.400"}
            >
              {heading}
            </Text>
          </Heading>
          <Text
            textAlign={{
              base: "center",
              md: "center",
              lg: "center",
              xl: "start",
            }}
            color={"gray.100"}
            fontSize={{ base: "lg", md: "xl" }}
            mt={{ base: 4, md: 0 }}
            mx={{ base: 2, md: 0, lg: 2 }}
            p={{ md: 2, lg: 0, xl: 0 }}
          >
            {description}
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
            height={{ base: "220px", md: "200px", lg: "240px", xl: "300px" }}
            rounded={"2xl"}
            width={"full"}
            mb={{ base: 0, md: 4, lg: 0, xl: 0 }}
            mx={{ base: 3, md: 3, lg: 3, xl: 0 }}
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
            <AspectRatio ratio={{ base: 16 / 9, md: 16 / 9, lg: 21 / 10 }}>
              <Image src={stepgif} alt="step" objectFit="cover" />
            </AspectRatio>
          </MotionBox>
        </Flex>
      </Stack>
    </Container>
  );
};

export default StepsOdd;
