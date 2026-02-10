import React from "react";
import {
  boxBackgroundColor,
  subFontColor,
  lightColor,
  darkColor,
  lightBorderColor,
  darkBorderColor,
} from "./colors";
import { MoonIcon, SunIcon, CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Spacer,
  Button,
  Heading,
  List,
  ListItem,
  ListIcon,
  Highlight,
  Image as ChakraImage,
  useColorMode,
} from "@chakra-ui/react";
import logo from "../assets/rakeoff_logo_white.svg";
import xLogo from "../assets/x_logo.svg";
import discordLogo from "../assets/discord_logo.svg";
import githubLogo from "../assets/github_logo.svg";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex h="10vh" align="center" justify="center">
        <Flex w={{ base: "90%", md: "80%" }} align="center">
          <ChakraImage alt="Rakeoff logo" src={logo} h={35} />
          <Spacer />
          <Button
            onClick={toggleColorMode}
            rounded="full"
            boxShadow="base"
            aria-label="Change color mode"
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>
      <Flex align="center" justify="center" h="80vh">
        <Box
          bgGradient={`linear(to-bl, ${boxBackgroundColor}, purple.500, #6229a8)`}
          h="90%"
          w={{ base: "90%", md: "80%" }}
          borderRadius="lg"
        >
          <Flex align="center" justify="center" h="100%">
            <Box>
              <Heading
                lineHeight="tall"
                align="center"
                color={colorMode === "light" ? lightColor : darkColor}
                fontFamily="'Roboto Mono', monospace"
                fontSize={{ base: "lg", md: "3xl" }}
                maxW="xl"
                px={3}
              >
                <Highlight
                  query={["Rakeoff.io"]}
                  styles={{
                    px: "1",
                    py: "1",
                    color: colorMode === "light" ? lightColor : darkColor,
                    borderBottom: `double ${
                      colorMode === "light" ? lightColor : darkColor
                    } 3px`,
                  }}
                >
                  The Rakeoff.io Known Neuron!
                </Highlight>
              </Heading>
              <Flex
                align="center"
                justify="center"
                direction="column"
                p={6}
                gap={6}
              >
                <List maxW="md" align="start">
                  <StyledListItem text="A known neuron on the Network Nervous System that always votes." />
                  <StyledListItem text="Advocates for an open and permissionless ICP with many voices." />
                  <StyledListItem text="Follow the new @NeuronPool X account for updates." />
                </List>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex h="10vh" align="center" justify="center">
        <Flex
          w="80%"
          align="center"
          direction={{ base: "column", md: "row" }}
          gap={2}
          mb={6}
        >
          <Heading
            color={subFontColor}
            fontFamily="'Roboto Mono', monospace"
            size="sm"
          >
            hello@neuronpool.com
          </Heading>
          <Spacer />
          <Flex align="center" gap={3}>
            <SocialIconLink
              image={xLogo}
              alt={"twitter link"}
              link={"https://x.com/NeuronPool"}
              xLogo
            />
            <SocialIconLink
              image={discordLogo}
              alt={"discord link"}
              link={"https://discord.gg/5jRHUYnsrM"}
            />
            <SocialIconLink
              image={githubLogo}
              alt={"github link"}
              link={"https://github.com/rakeoff-labs"}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default App;

const StyledListItem = ({ text }) => {
  const { colorMode } = useColorMode();
  return (
    <ListItem
      mb={3}
      fontWeight={600}
      fontSize={{ base: "sm", md: "lg" }}
      color={colorMode === "light" ? lightColor : darkColor}
      fontFamily="'Roboto Mono', monospace"
    >
      <ListIcon
        as={CheckCircleIcon}
        color={colorMode === "light" ? lightColor : darkColor}
      />
      {text}
    </ListItem>
  );
};

const SocialIconLink = ({ image, alt, link, xLogo }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Box
        rounded="full"
        border={
          colorMode === "light"
            ? `solid ${lightBorderColor} 1px`
            : `solid ${darkBorderColor} 1px`
        }
        p={2}
        boxShadow="base"
        _hover={{ opacity: "0.8", cursor: "pointer" }}
      >
        <ChakraImage h={"22px"} p={xLogo ? "3px" : 0} src={image} alt={alt} />
      </Box>
    </a>
  );
};
