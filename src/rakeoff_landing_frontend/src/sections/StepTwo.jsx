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
import step2 from "../../assets/step2.gif";
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
              height={"284px"}
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
                <Image src={step2} alt="step2" objectFit="cover" />
              </AspectRatio>
            </MotionBox>
          </Flex>
          <Stack flex={1} spacing={10} align="end">
            <Heading lineHeight={1.1} fontWeight={600} fontSize={"5xl"}>
              <br />
              <Text as={"span"} color={"purple.400"}>
                2. Add a minimum of 1 ICP to your wallet
              </Text>
            </Heading>
            <Text color={"gray.100"} fontSize="xl">
              To deposit ICP into your wallet, click 'Receive' to copy your wallet
              address. Then, go to any cryptocurrency exchange and send ICP to
              your Rakeoff wallet address.
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
                2. Add a minimum of 1 ICP to your wallet
              </Text>
            </Heading>
            <Text
              textAlign={"center"}
              color={"gray.100"}
              mt={4}
              fontSize="lg"
              mx={2}
            >
              Transfer ICP to your wallet, click 'Receive', copy your address,
              then paste it into the exchange platform's field and enter the
              amount of ICP you wish to transfer.
            </Text>
          </Stack>
          <Flex position={"relative"} w={"100%"}>
            <MotionBox
              mb={4}
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
                <Image src={step2} alt="step2" objectFit="cover" />
              </AspectRatio>
            </MotionBox>
          </Flex>
        </Stack>
      )}
    </Container>
  );
};

export default StepTwo;
