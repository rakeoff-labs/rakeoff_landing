import React from "react";
import {
  Box,
  Flex,
  Container,
  Heading,
  Image as ChakraImage,
  HStack,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import githubLogo from "../../assets/github_logo.svg";
import xLogo from "../../assets/x_logo.svg";
import discordLogo from "../../assets/discord_logo.svg";
import mediumLogo from "../../assets/medium_logo.svg";
import screen from "../../assets/Rakeoff_Screen.png";
import { RakeoffGrey, boxBackgroundColor } from "../colors";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Statistics from "./Statistics";

const Banner = () => {
  return (
    <Box>
      <Box
        h={{ base: "90vh", md: "600px" }}
        overflow="hidden"
        bgGradient={`linear(to-bl, ${boxBackgroundColor}, purple.500, #6229a8)`}
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
  const text = "The best way to stake ICP and pool your staking rewards".split(
    " "
  );
  console.log(text)
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
              <Heading color={"white"} size={{ base: "2xl", md: "3xl" }}>
                RAKE
              </Heading>
              <Heading color={RakeoffGrey} size={{ base: "2xl", md: "3xl" }}>
                OFF
              </Heading>
            </Flex>
            <Heading color="white" size={{ base: "2xl", md: "3xl" }}>
              dApp
            </Heading>
          </Flex>

          <Box maxW={{ base: "xs", md: "lg" }} mt={3}>
            <div className="Bio">
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 8 }}
                  transition={{
                    duration: 0.15,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </div>
            <SocialButtonList />
          </Box>
        </Box>

        <Spacer />

        <Box w={{ base: "100%", md: "auto" }} align="center">
          <ChakraImage
            src={screen}
            alt="screenshot of app"
            h={{ base: 670, md: 640 }}
            w={500}
            objectFit="contain"
            mb={{ base: 0, md: -40 }}
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
      <SocialIconLink
        image={xLogo}
        alt={"twitter link"}
        link={"https://twitter.com/rakeoff_app"}
        xLogo
      />
      <SocialIconLink
        image={discordLogo}
        alt={"discord link"}
        link={"https://discord.gg/5jRHUYnsrM"}
      />
      <SocialIconLink
        image={mediumLogo}
        alt={"medium link"}
        link={"https://rakeoff.medium.com/"}
      />
      <SocialIconLink
        image={githubLogo}
        alt={"github link"}
        link={"https://github.com/rakeoff-labs"}
      />
    </HStack>
  );
};

const SocialIconLink = ({ image, alt, link, xLogo }) => {
  return (
    <a href={link} target="_blank">
      <Box
        borderRadius="md"
        borderLeft={"solid #fff 2px"}
        borderBottom={"solid #fff 2px"}
        py={0.5}
        px={1}
        _hover={{ opacity: "0.8", cursor: "pointer" }}
      >
        <ChakraImage
          alt={alt}
          src={image}
          _hover={{ opacity: 0.8 }}
          h="25px"
          p={xLogo ? "3px" : 0}
        />
      </Box>
    </a>
  );
};
