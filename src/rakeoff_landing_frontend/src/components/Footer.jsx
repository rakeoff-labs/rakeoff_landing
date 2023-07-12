import React from "react";
import {
  Box,
  Container,
  Stack,
  useColorModeValue,
  Image as ChakraImage,
  Center,
  Flex,
} from "@chakra-ui/react";
import logowhite from "../../assets/logo_name_white.png";
import githubwhite from "../../assets/github_white.png";
import twitterwhite from "../../assets/twitter_white.png";
import discordwhite from "../../assets/discord_white.png";
import { Icon } from "@chakra-ui/react";
import NewsletterSubscribe from "./NewsletterSubscribe";

const Footer = () => {
  return (
    <Container maxW="7xl" mt={12} p={0}>
      <Center mb={5}>
        <NewsletterSubscribe />
      </Center>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"7xl"}
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
            <a href="https://twitter.com/rakeoff_app" target="_blank">
              <Icon
                as={ChakraImage}
                src={twitterwhite}
                _hover={{ opacity: 0.8 }}
                w={6}
                h={6}
              />
            </a>
            <a href="https://discord.gg/5jRHUYnsrM" target="_blank">
              <Icon
                as={ChakraImage}
                src={discordwhite}
                w={8}
                h={6}
                _hover={{ opacity: 0.8 }}
              />
            </a>
            <a href="https://github.com/rakeoff-labs" target="_blank">
              <Icon
                as={ChakraImage}
                src={githubwhite}
                _hover={{ opacity: 0.8 }}
                w={6}
                h={6}
              />
            </a>
          </Stack>
        </Container>
      </Box>
    </Container>
  );
};

export default Footer;
