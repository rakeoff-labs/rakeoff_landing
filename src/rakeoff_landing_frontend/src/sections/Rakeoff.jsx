import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Container,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";
import rakeoff from "../../assets/rakeoff_dashboard.png";
import { RakeoffPurpleHue, boxBackgroundColor } from "../colors";
export const MotionButton = motion(Button);
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Rakeoff = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const imageValue = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const shadowValue = useTransform(scrollYProgress, [0, 1], ["-25%", "100%"]);
  const opacityValue = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Container
      maxW="8xl"
      mt={{ base: 12, md: "5rem" }}
      bgGradient={`linear(to-bl, ${boxBackgroundColor}, purple.500, #6229a8)`}
      ref={containerRef}
      p={0}
    >
      <Center mb={8}>
        <Stack minH={"80vh"} direction={{ base: "column", md: "row" }}>
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading
                size={{ base: "2xl", md: "2xl" }}
                textAlign={isDesktop ? undefined : "center"}
              >
                What is Rakeoff?
                <br />
              </Heading>
              <Text
                fontSize={{ base: "lg", lg: "xl" }}
                color={"grey.100"}
                textAlign={isDesktop ? undefined : "center"}
              >
                We are a cryptocurrency staking rewards application built on the
                ICP blockchain. We provide an ICP wallet with simplified
                staking, real-time asset tracking, and a no-loss prize pool for
                staking rewards. Enhance your staking experience with
                achievement-based ICP bonuses, all within a compact,
                user-friendly application.
              </Text>
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={{ base: 1, sm: 6 }}
              >
                <MotionButton
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
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Launch dApp
                </MotionButton>
              </Stack>
            </Stack>
          </Flex>
          {isDesktop ? (
            <motion.div
              className="img-container"
              style={{
                translateX: imageValue,
                boxShadow: `10px 10px 20px rgba(0, 0, 0, ${shadowValue})`,
                opacity: opacityValue,
              }}
            >
              <Image
                alt="rakeoff"
                objectFit="cover"
                src={rakeoff}
                mt={12}
                ml={14}
                h={{ base: 670, md: 640 }}
                w={"100%"}
              />
            </motion.div>
          ) : (
            <Image alt="rakeoff" objectFit="cover" src={rakeoff} mb={10} />
          )}
        </Stack>
      </Center>
    </Container>
  );
};
export default Rakeoff;
