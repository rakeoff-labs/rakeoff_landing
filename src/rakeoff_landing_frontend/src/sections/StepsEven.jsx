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

import { boxBackgroundColor, boxBorderColor } from "./../colors";

export const MotionBox = motion(Box);
const StepsEven = ({ stepGif, heading, description }) => {
  const isDesktop = useBreakpointValue({ base: false, md: true, lg: true });

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
      mt={{ base: 12, md: 4, lg: 2, xl: "2rem" }}
      p={0}
    >
      {isDesktop ? (
        <Stack align={"center"} spacing={10} pt={20} direction={"row"}>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <MotionBox
              mb={{ base: 0, md: 8, lg: 4, xl: 8 }}
              position={"relative"}
              height={{ base: "220px", md: "200px", lg: "240px", xl: "300px" }}
              rounded={"2xl"}
              mx={{ base: 3, md: 3, lg: 3, xl: 0 }}
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
              <AspectRatio ratio={{ base: 16 / 9, md: 16 / 9, lg: 21 / 10 }}>
                <Image src={stepGif} alt="step" objectFit="cover" />
              </AspectRatio>
            </MotionBox>
          </Flex>
          <Stack flex={1} spacing={10}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ md: "2xl", lg: "4xl", xl: "5xl" }}
            >
              <Text
                mt={{ base: 0, md: 6, lg: 16, xl: 0 }}
                textAlign={{
                  base: "center",
                  md: "center",
                  lg: "center",
                  xl: "start",
                }}
                color={"purple.400"}
              >
                {heading}
              </Text>
            </Heading>
            <Text
              p={{ md: 2, lg: 0, xl: 0 }}
              color={"gray.100"}
              textAlign={{
                base: "center",
                md: "center",
                lg: "center",
                xl: "start",
              }}
              fontSize="lg"
            >
              {description}
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
        <Stack align={"center"} pt={12} direction={"column"}>
          <Stack>
            <Heading lineHeight={1.1} fontWeight={600} fontSize={"3xl"} mx={2}>
              <Text textAlign="center" color={"purple.400"}>
                {heading}
              </Text>
            </Heading>
            <Text
              textAlign={"center"}
              color={"gray.100"}
              mt={4}
              fontSize="lg"
              mx={2}
            >
              {description}
            </Text>
          </Stack>
          <Flex position={"relative"} w={"100%"}>
            <MotionBox
              mb={12}
              position={"relative"}
              height={"220px"}
              rounded={"2xl"}
              width={"full"}
              mx={3}
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
              <AspectRatio ratio={16 / 9}>
                <Image src={stepGif} alt="step" objectFit="cover" />
              </AspectRatio>
            </MotionBox>
          </Flex>
        </Stack>
      )}
    </Container>
  );
};

export default StepsEven;
