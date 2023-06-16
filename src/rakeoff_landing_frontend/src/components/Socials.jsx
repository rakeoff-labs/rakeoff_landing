import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Center,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import redgit from "../assets/redgit.png";
import redtwit from "../assets/redtwit.png";
import redisc from "../assets/redisc.png";

const Social = () => {
  return (
    <Box py={["6", "8", "12"]}>
      <Center mb={5}>
        <Heading
          bgGradient="linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)"
          bgClip="text"
          size="xl"
        >
          Join the community
        </Heading>
      </Center>

      <Center>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          <SocialBoxAndImage
            heading={"Twitter"}
            content={"Keep up to date with our announcements @rakeoff_app"}
            image={redtwit}
            link={"https://twitter.com/rakeoff_app"}
          />
          <SocialBoxAndImage
            heading={"Github"}
            content={"Check out our code or give us a star on Github!"}
            image={redgit}
            link={"https://github.com/rakeoff-labs"}
          />
          <SocialBoxAndImage
            heading={"Discord"}
            content={"Chat to the devs, we'd love to hear your opinions"}
            image={redisc}
            link={"https://discord.gg/5jRHUYnsrM"}
          />
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default Social;

const SocialBoxAndImage = ({ heading, image, link, content }) => {
  return (
    <a href={link} target="_blank">
      <Box
        bg={"#1e1f23"}
        border={"1px solid #a5a6a7"}
        borderRadius="3xl"
        justifyContent="start"
        py={12}
        px={8}
        transition="transform 0.3s"
        _hover={{ transform: "translateY(-5px)" }}
        cursor="pointer"
      >
        <Image
          src={image}
          alt={heading}
          fit="contain"
          maxW="200px"
          maxH="200px"
          mx="auto"
        />
        <Heading size="lg" textAlign="center" color="white" mb={3}>
          {heading}
          <ArrowForwardIcon color="white" transform="rotate(-45deg)" />
        </Heading>
        <Text textAlign="center" color="white">
          {content}
        </Text>
      </Box>
    </a>
  );
};
