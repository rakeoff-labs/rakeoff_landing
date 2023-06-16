import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Image as ChakraImage,
  Center,
  Flex,
} from "@chakra-ui/react";
import logowhite from "../assets/logowhite.png";
import githubwhite from "../assets/githubwhite.png";
import twitterwhite from "../assets/twitterwhite.png";
import discord from "../assets/discord.png";
import { Icon } from "@chakra-ui/react";
import NewsletterSubscribe from "./NewsletterSubscribe";

const Footer = () => {
  return (
    <Box>
      <Center py={["4", "8", "12"]}>
        <NewsletterSubscribe />
      </Center>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Flex>
            <ChakraImage alt="rakeoff logo" h={45} src={logowhite} />
          </Flex>
          <Stack direction="row" spacing={6} justify="center" mt={4}>
            <a href="https://github.com/rakeoff-labs" target="_blank">
              <Icon
                as={ChakraImage}
                src={githubwhite}
                _hover={{ opacity: 0.8 }}
              />
            </a>
            <a href="https://twitter.com/rakeoff_app" target="_blank">
              <Icon
                as={ChakraImage}
                src={twitterwhite}
                _hover={{ opacity: 0.8 }}
              />
            </a>
            <a href="https://discord.gg/5jRHUYnsrM" target="_blank">
              <Icon as={ChakraImage} src={discord} _hover={{ opacity: 0.8 }} />
            </a>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
