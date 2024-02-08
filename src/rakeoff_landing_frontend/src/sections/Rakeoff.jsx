import React from "react";
import { motion } from "framer-motion";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Container,
  Center,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import rakeoff from "../../assets/rakeoff_dashboard.png";
import { RakeoffPurpleHue, boxBackgroundColor } from "../colors";

import { ArrowForwardIcon } from "@chakra-ui/icons";

const Rakeoff = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
    xl: true,
  });

  const variants = {
    hidden: {
      translateX: "2%",
      opacity: 0,
    },
    visible: {
      translateX: "0%",
      opacity: 1,
    },
  };

  return (
    <Container
      maxW={{ base: "8xl", md: "7xl", lg: "7xl" }}
      mt={{ base: 12, md: "5rem" }}
      bgGradient={`linear(to-bl, ${boxBackgroundColor}, purple.500, #6229a8)`}
      p={0}
    >
      <Center mb={8}>
        <Stack
          direction={{ base: "column", md: "column", lg: "row" }}
          width="100%"
          spacing={8}
        >
          <Flex p={8} flex={1} alignItems="center" justifyContent="center">
            <Stack spacing={4} width={"100%"}>
              <Heading
                size={{ base: "2xl", md: "2xl", lg: "3xl" }}
                textAlign={isDesktop ? undefined : "center"}
                color="white"
              >
                What is Rakeoff?
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "2xl", lg: "xl" }}
                color={"white"}
                fontWeight={400}
                textAlign={isDesktop ? "start" : "center"}
                as={"span"}
                position={"relative"}
              >
                We are a cryptocurrency staking rewards application built on the
                ICP blockchain. We provide an ICP wallet with simplified
                staking, real-time asset tracking, and a no-loss prize pool for
                staking rewards. Enhance your staking experience with
                achievement-based ICP bonuses, all within a compact,
                user-friendly application.
              </Text>
              <Stack
                direction={{ base: "column", md: "column", lg: "row" }}
                spacing={{ base: 1, sm: 6 }}
              >
                <Button
                  m={{ base: 0, md: 2, lg: 0 }}
                  p={{ base: 0, md: 8, lg: 4 }}
                  size="lg"
                  rightIcon={<ArrowForwardIcon />}
                  as="a"
                  href="https://app.rakeoff.io/"
                  target="_blank"
                  bg={boxBackgroundColor}
                  _hover={{
                    boxShadow: `0px 0px 10px 6px ${RakeoffPurpleHue}`,
                  }}
                  boxShadow={`0px 0px 10px 3px ${RakeoffPurpleHue}`}
                  color="white"
                >
                  Launch dApp
                </Button>
              </Stack>
            </Stack>
          </Flex>
          {isDesktop ? (
            <motion.div
              className="img-container"
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Image
                alt="rakeoff"
                objectFit="cover"
                src={rakeoff}
                p={{ lg: 4, xl: 0 }}
                mt={{ lg: 24, xl: 8 }}
                mb={{ lg: 0 }}
                ml={{ lg: 0, xl: 14 }}
                h={{ lg: 470, xl: 620 }}
                w={"100%"}
              />
            </motion.div>
          ) : (
            <Image
              alt="rakeoff"
              objectFit="cover"
              src={rakeoff}
              p={{ base: 0, md: 4 }}
              mb={{ base: 14, md: 2 }}
            />
          )}
        </Stack>
      </Center>
    </Container>
  );
};
export default Rakeoff;
