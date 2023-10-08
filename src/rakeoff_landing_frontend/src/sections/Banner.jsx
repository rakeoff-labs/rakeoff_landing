import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  Heading,
  Image as ChakraImage,
  HStack,
  Icon,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import githubwhite from "../../assets/github_white.png";
import twitterwhite from "../../assets/twitter_white.png";
import discordwhite from "../../assets/discord_white.png";
import mediumwhite from "../../assets/medium_white.png";
import screen from "../../assets/Rakeoff_Screen.png";
import { RakeoffRed, boxBackgroundColor } from "../colors";
import Navbar from "./Navbar";
import Statistics from "./Statistics";

const Banner = () => {
  return (
    <Box>
      <Box
        h={{ base: "90vh", md: "600px" }}
        overflow="hidden"
        bgGradient={`linear(to-br, ${boxBackgroundColor}, purple.500, ${RakeoffRed})`}
        bgSize="150% 150%"
      >
        <Navbar />
        <TitleAndDescription />
      </Box>
      <Statistics />
    </Box>
  );
};

export default Banner;

const TitleAndDescription = () => {
  return (
    <Container maxW="7xl" h={"500px"}>
      <Stack
        h={"100%"}
        align={{ base: "start", md: "end" }}
        direction={{ base: "column", md: "row" }}
      >
        <Box mb={{ base: 0, md: 12 }} mt={{ base: 12, md: 0 }}>
          <Flex align="center" gap={3}>
            <Flex align="center">
              <Heading color={RakeoffRed} size={{ base: "2xl", md: "3xl" }}>
                RAKE
              </Heading>
              <Heading color="white" size={{ base: "2xl", md: "3xl" }}>
                OFF
              </Heading>
            </Flex>
            <Heading color="white" size={{ base: "2xl", md: "3xl" }}>
              dApp
            </Heading>
          </Flex>
          <Box maxW={{ base: "xs", md: "lg" }} mt={3}>
            <Text fontSize={{ base: "xl", md: "3xl" }} color="white">
              The best way to stake ICP, pool your staking rewards and earn
              ckBTC
            </Text>
            <SocialButtonList />
          </Box>
        </Box>
        <Spacer />
        <Box w={{ base: "100%", md: "auto" }} align="center">
          <ChakraImage
            src={screen}
            alt="screenshot of app"
            h={500}
            w={390}
            objectFit="contain"
            mb={-5}
            mr={{ base: 0, md: 12 }}
          />
        </Box>
      </Stack>
    </Container>
  );
};

const SocialButtonList = () => {
  return (
    <HStack mt={3} gap={3}>
      <a href="https://twitter.com/rakeoff_app" target="_blank">
        <Icon
          as={ChakraImage}
          alt="twitter link"
          src={twitterwhite}
          _hover={{ opacity: 0.8 }}
          w={6}
          h="auto"
          objectFit="contain"
        />
      </a>
      <a href="https://discord.gg/5jRHUYnsrM" target="_blank">
        <Icon
          as={ChakraImage}
          alt={"discord link"}
          src={discordwhite}
          _hover={{ opacity: 0.8 }}
          w={8}
          h={6}
          objectFit="contain"
        />
      </a>
      <a href="https://medium.com/@crew_7288" target="_blank">
        <Icon
          as={ChakraImage}
          alt="medium link"
          src={mediumwhite}
          _hover={{ opacity: 0.8 }}
          h={6}
          w={8}
          objectFit="contain"
        />
      </a>
      <a href="https://github.com/rakeoff-labs" target="_blank">
        <Icon
          as={ChakraImage}
          alt="github link"
          src={githubwhite}
          _hover={{ opacity: 0.8 }}
          w={6}
          h={6}
          objectFit="contain"
        />
      </a>
    </HStack>
  );
};
