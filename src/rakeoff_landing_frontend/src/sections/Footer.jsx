import React from "react";
import {
  Box,
  Container,
  HStack,
  useColorModeValue,
  Image as ChakraImage,
  Center,
  Flex,
  Stack,
  Heading,
} from "@chakra-ui/react";
import logowhitepurple from "../../assets/rakeoff_logo_name_white_purple.svg";
import githubLogo from "../../assets/github_logo.svg";
import xLogo from "../../assets/x_logo.svg";
import discordLogo from "../../assets/discord_logo.svg";
import mediumLogo from "../../assets/medium_logo.svg";
import NewsletterSubscribe from "./NewsletterSubscribe";

const Footer = () => {
  return (
    <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
      <Center mb={8}>
        <Heading size={{ base: "2xl", md: "3xl" }} color="white">
          Join our Community
        </Heading>
      </Center>

      <Center mb={5}>
        <NewsletterSubscribe />
      </Center>

      <Box mt={{ base: 12, md: "5rem" }}>
        <Container
          as={Stack}
          maxW={"7xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Flex align="center">
            <ChakraImage
              alt="rakeoff logo"
              w="auto"
              h={35}
              objectFit="contain"
              src={logowhitepurple}
            />
            <Box ml={2} color="white" fontSize="md">
              crew@rakeoff.io
            </Box>
          </Flex>
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
        </Container>
      </Box>
    </Container>
  );
};

export default Footer;

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
