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
} from "@chakra-ui/react";
import rakeoff from "../../assets/dark.png";
import { RakeoffGrey, boxBackgroundColor } from "../colors";

const Rakeoff = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const imageValue = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const shadowValue = useTransform(scrollYProgress, [0, 1], ["-25%", "100%"]);

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
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                What is Rakeoff?
                <br />
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color={"gray.500"}
              ></Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Button
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={
                    {
                      // bg: "blue.500",
                    }
                  }
                >
                  Launch dApp
                </Button>
                <Button rounded={"full"}>How It Works</Button>
              </Stack>
            </Stack>
          </Flex>
          <motion.div
            className="img-container"
            style={{
              translateX: imageValue,
              boxShadow: `10px 10px 20px rgba(0, 0, 0, ${shadowValue})`,
            }}
          >
            <Image
              alt="Login Image"
              objectFit="cover"
              src={rakeoff}
              ml={9}
              h={{ base: 670, md: 640 }}
              w={1100}
            />
          </motion.div>
        </Stack>
      </Center>
    </Container>
  );
};
export default Rakeoff;
