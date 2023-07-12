import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Center,
  Container,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import redgit from "../../assets/red_github_icon.png";
import redtwit from "../../assets/red_twitter_icon.png";
import redisc from "../../assets/red_discord_icon.png";
import redyou from "../../assets/red_youtube_icon.png";

import { boxBackgroundColor, boxBorderColor, boxFontColor } from "./Color";

const Social = () => {
  return (
    <Container maxW={"7xl"} mt={12} p={0}>
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
        <SimpleGrid
          columns={[1, 2, 4]}
          spacing={8}
          mx={{ base: 3, md: 3, lg: 0 }}
        >
          <SocialBoxAndImage
            heading={"Twitter"}
            content={"Keep up to date with us on Twitter @rakeoff_app."}
            image={redtwit}
            link={"https://twitter.com/rakeoff_app"}
          />
          <SocialBoxAndImage
            heading={"Discord"}
            content={"Chat to the devs, we'd love to hear your opinions."}
            image={redisc}
            link={"https://discord.gg/5jRHUYnsrM"}
          />
          <SocialBoxAndImage
            heading={"YouTube"}
            content={"Check out our latest videos and tutorials on YouTube."}
            image={redyou}
            link={"https://www.youtube.com/@Rakeoff"}
          />
          <SocialBoxAndImage
            heading={"GitHub"}
            content={"Check out our code or give us a star on Github."}
            image={redgit}
            link={"https://github.com/rakeoff-labs"}
          />
        </SimpleGrid>
      </Center>
    </Container>
  );
};

export default Social;

const SocialBoxAndImage = ({ heading, image, link, content }) => {
  return (
    <a href={link} target="_blank">
      <Box
        bg={boxBackgroundColor}
        border={boxBorderColor}
        borderRadius="3xl"
        justifyContent="start"
        p={8}
        transition="transform 0.3s"
        _hover={{ transform: "translateY(-5px)" }}
        cursor="pointer"
      >
        <Image
          src={image}
          alt={heading}
          fit="contain"
          h={{ base: 150, md: 150, lg: 200 }}
          mx="auto"
        />
        <Heading size="lg" textAlign="center" color="white" mb={3}>
          {heading} <ExternalLinkIcon color="white" mb={1} />
        </Heading>
        <Text textAlign="center" noOfLines={2} color={boxFontColor}>
          {content}
        </Text>
      </Box>
    </a>
  );
};
