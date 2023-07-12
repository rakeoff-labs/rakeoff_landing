import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Center,
  Container,
} from "@chakra-ui/react";
import coolStakingSafe from "../../assets/cool_staking_safe.png";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { boxBackgroundColor, boxBorderColor, boxFontColor } from "./Color";

const Social = () => {
  return (
    <Container maxW="7xl" mt={{base: 12, md: "5rem"}} p={0}>
      <Center mb={5}>
        <Heading
          bgGradient="linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)"
          bgClip="text"
          size="xl"
        >
          More on Rakeoff
        </Heading>
      </Center>

      <Center>
        <SimpleGrid
          columns={[1, 1, 2]}
          spacing={8}
          mx={{ base: 3, md: 3, lg: 0 }}
          w="100%"
          templateAreas={[
            `"allInfo"
            "WhatIsStaking"
            "HowDoIEarnRewards"
            "ckbtcIntegration"`,
            null,
            `"allInfo WhatIsStaking"
            "allInfo HowDoIEarnRewards"
            "allInfo ckbtcIntegration"`,
          ]}
        >
          <Box gridArea="allInfo">
            <a
              href="https://rakeoff.notion.site/Revolutionising-ICP-Crypto-Staking-029a131e8a2b4b8eb1dbba6ad857980d?pvs=4"
              target="_blank"
            >
              <Box
                bg={boxBackgroundColor}
                border={boxBorderColor}
                borderRadius="3xl"
                py={12}
                px={8}
                transition="transform 0.3s"
                _hover={{ transform: "translateY(-5px)" }}
                cursor="pointer"
                h="100%"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${coolStakingSafe})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Heading size="lg" textAlign="center" color="white">
                  Visit the Rakeoff documentation{" "}
                  <ExternalLinkIcon color="white" mb={1} />
                </Heading>
                <Text textAlign="center" my={5} color={boxFontColor}>
                  Read our overview of the Rakeoff dApp.
                </Text>
              </Box>
            </a>
          </Box>
          <Box gridArea="WhatIsStaking">
            <StoryBoxAndImage
              heading="What is ICP staking?"
              link={
                "https://rakeoff.notion.site/What-is-ICP-Staking-2f4a04d9723a47a882dbed2eaf22ec39"
              }
            />
          </Box>
          <Box gridArea="HowDoIEarnRewards">
            <StoryBoxAndImage
              heading="How do I earn rewards?"
              link={
                "https://rakeoff.notion.site/How-do-I-earn-Rewards-fcc4ddf33ede49fe970b0def73770419?pvs=4"
              }
            />
          </Box>
          <Box gridArea="ckbtcIntegration">
            <StoryBoxAndImage
              heading="ckBTC integration"
              link={
                "https://rakeoff.notion.site/Bitcoin-to-ICP-Conversion-c1c99cb154264804a1e5b86d12372255?pvs=4"
              }
            />
          </Box>
        </SimpleGrid>
      </Center>
    </Container>
  );
};

export default Social;

const StoryBoxAndImage = ({ heading, link }) => {
  return (
    <a href={link} target="_blank">
      <Box
        bg={boxBackgroundColor}
        border={boxBorderColor}
        borderRadius="3xl"
        justifyContent="start"
        py={12}
        transition="transform 0.3s"
        _hover={{ transform: "translateY(-5px)" }}
        cursor="pointer"
      >
        <Heading size="lg" textAlign="center" mb={3} color="white">
          {heading} <ExternalLinkIcon color="white" mb={1} />
        </Heading>
        <Text textAlign="center" color={boxFontColor}>
          Read here for more.
        </Text>
      </Box>
    </a>
  );
};
