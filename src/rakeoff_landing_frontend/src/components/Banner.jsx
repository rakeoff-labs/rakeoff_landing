import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  Center,
  Heading,
  Image as ChakraImage,
  HStack,
  Icon,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

import githubwhite from "../../assets/github_white.png";
import twitterwhite from "../../assets/twitter_white.png";
import discordwhite from "../../assets/discord_white.png";
import youtubewhite from "../../assets/youtube_white.png";
import screen from "../../assets/Rakeoff_Screen.png";
import winningBadge from "../../assets/winning_badge.png";
import icpBadge from "../../assets/icp_logo.png";
import motokoBadge from "../../assets/motoko_logo.png";
import {
  RakeoffRed,
  boxBackgroundColor,
  boxBorderColor,
  boxFontColor,
} from "./Color";
import CustomNavbar from "./CustomNavbar";

const Banner = () => {
  return (
    <Box>
      <Box
        h={{ base: "90vh", md: "600px" }}
        overflow="hidden"
        bgGradient={`linear(to-br, ${boxBackgroundColor}, purple.500, ${RakeoffRed})`}
        bgSize="150% 150%"
      >
        <CustomNavbar />
        <TitleAndDescription />
      </Box>
      <SocialProof />
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
              <Heading color={RakeoffRed}>RAKE</Heading>
              <Heading color="white">OFF</Heading>
            </Flex>
            <Heading color="white">dApp</Heading>
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
          <a href="https://app.rakeoff.io/" target="_blank">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 75
              }}
            >
              <ChakraImage
                src={screen}
                alt="screenshot of app"
                h={500}
                mb={-5}
                mr={{ base: 0, md: 12 }}
                transition="transform 0.3s"
                _hover={{
                  transform: "translateY(-10px)",
                  cursor: "pointer",
                }}
              />
            </motion.div>
          </a>
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
          h={6}
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
        />
      </a>
      <a href="https://www.youtube.com/@Rakeoff" target="_blank">
        <Icon
          as={ChakraImage}
          alt="youtube link"
          src={youtubewhite}
          _hover={{ opacity: 0.8 }}
          h={6}
          w={8}
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
        />
      </a>
    </HStack>
  );
};

const SocialProof = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Center>
      <Box
        mx={{ base: 3, md: 3, lg: 0 }}
        zIndex={1}
        w="7xl"
        bg={boxBackgroundColor}
        border={boxBorderColor}
        h={{ base: "100%", md: "150px" }}
        borderRadius={"3xl"}
        mt={-10}
        p={5}
      >
        <motion.div
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <Stack
            w={"100%"}
            h={"100%"}
            direction={{ base: "column", md: "row" }}
            justify="space-around"
            align="center"
            gap={5}
          >
            <motion.div variants={item}>
              <SocialProofBox
                link={
                  "https://medium.com/encode-club/internet-computer-buidl-bitcoin-hackathon-powered-by-encode-summary-and-winners-3ecb2daf6921"
                }
                image={winningBadge}
                about={"Winner of the Dfinity x Encode hackathon"}
              />
            </motion.div>
            <motion.div variants={item}>
              <SocialProofBox
                link={"https://dfinity.org/grants/"}
                image={icpBadge}
                about={"Backed by the Dfinity grants program"}
              />
            </motion.div>
            <motion.div variants={item}>
              <SocialProofBox
                link={"https://internetcomputer.org/capabilities"}
                image={motokoBadge}
                about={"Powered by secure smart contracts"}
              />
            </motion.div>
          </Stack>
        </motion.div>
      </Box>
    </Center>
  );
};

const SocialProofBox = ({ image, about, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a href={link} target="_blank">
      <Flex
        align="center"
        maxW="300px"
        gap={5}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        _hover={{
          cursor: "pointer",
        }}
      >
        <ChakraImage
          src={image}
          alt={about}
          h={{ base: "80px", md: "100px" }}
          boxShadow={
            isHovered ? "0px 0px 10px 6px red" : "0px 0px 10px 3px red"
          }
          bg={"white"}
          borderRadius="full"
          p={1}
        />
        <Text color={isHovered ? "white" : boxFontColor}>
          {about}
          <ExternalLinkIcon ml={1} mb={1} />
        </Text>
      </Flex>
    </a>
  );
};
