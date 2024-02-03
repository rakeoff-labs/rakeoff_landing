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
import step4 from "../../assets/step4.gif";
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
    <Container
      maxW="7xl"
      mt={{ base: 12, md: 2 }}
      pb={{ base: 2, md: 12 }}
      px={0}
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
                <Image src={step4} alt="step4" objectFit="cover" />
              </AspectRatio>
            </MotionBox>
          </Flex>
          <Stack flex={1} spacing={10}>
            <Heading lineHeight={1.1} fontWeight={600} fontSize={"5xl"}>
              <Text as={"span"} color={"purple.400"}>
                4. Disburse your rewards
              </Text>
            </Heading>
            <Text color={"gray.100"} fontSize="xl">
              Once you have accrued 1 ICP in rewards, explore our disbursement
              options, such as entering the no-loss prize pool for a chance to
              win big, or withdrawing your ICP to your wallet.
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
                4. Disburse your rewards
              </Text>
            </Heading>
            <Text
              textAlign={"center"}
              color={"gray.100"}
              mt={4}
              fontSize="lg"
              mx={2}
            >
              Earn at least 1 ICP in rewards and disburse it back to ICP or
              enter our no-loss prize pool for a chance to earn more.
            </Text>
          </Stack>
          <Flex position={"relative"} w={"100%"}>
            <MotionBox
              mb={12}
              mx={3}
              position={"relative"}
              height={"220x"}
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
              <AspectRatio ratio={16 / 9}>
                <Image src={step4} alt="step4" objectFit="cover" />
              </AspectRatio>
            </MotionBox>
          </Flex>
        </Stack>
      )}
    </Container>
  );
};

export default StepFour;
