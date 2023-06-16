import React from "react";
import { Box, Heading, SimpleGrid, Text, Center } from "@chakra-ui/react";
import coolsafe from "../assets/coolsafe.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Social = () => {
  return (
    <Box py={["6", "8", "12"]}>
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
                bg={"#1e1f23"}
                border={"1px solid #a5a6a7"}
                borderRadius="3xl"
                py={12}
                px={8}
                transition="transform 0.3s"
                _hover={{ transform: "translateY(-5px)" }}
                cursor="pointer"
                h="100%"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${coolsafe})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Heading size="lg" textAlign="center" color="white">
                  Read the Rakeoff Litepaper{" "}
                  <ArrowForwardIcon color="white" transform="rotate(-45deg)" />
                </Heading>
                <Text textAlign="center" my={5} color="white">
                  Read our overview of the Rakeoff dApp
                </Text>
              </Box>
            </a>
          </Box>
          <Box gridArea="WhatIsStaking">
            <StoryBoxAndImage
              heading="What is ICP staking?"
              image={coolsafe}
              link={
                "https://rakeoff.notion.site/What-is-ICP-Staking-2f4a04d9723a47a882dbed2eaf22ec39"
              }
            />
          </Box>
          <Box gridArea="HowDoIEarnRewards">
            <StoryBoxAndImage
              heading="How do I earn rewards?"
              image={coolsafe}
              link={
                "https://rakeoff.notion.site/How-do-I-earn-Rewards-fcc4ddf33ede49fe970b0def73770419?pvs=4"
              }
            />
          </Box>
          <Box gridArea="ckbtcIntegration">
            <StoryBoxAndImage
              heading="ckBTC integration"
              image={coolsafe}
              link={
                "https://rakeoff.notion.site/Bitcoin-to-ICP-Conversion-c1c99cb154264804a1e5b86d12372255?pvs=4"
              }
            />
          </Box>
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default Social;

const StoryBoxAndImage = ({ heading, link }) => {
  return (
    <a href={link} target="_blank">
      <Box
        bg={"#1e1f23"}
        border={"1px solid #a5a6a7"}
        borderRadius="3xl"
        justifyContent="start"
        py={12}
        transition="transform 0.3s"
        _hover={{ transform: "translateY(-5px)" }}
        cursor="pointer"
      >
        <Heading size="lg" textAlign="center" mb={3} color="white">
          {heading}{" "}
          <ArrowForwardIcon color="white" transform="rotate(-45deg)" />
        </Heading>
        <Text textAlign="center" color="white">
          Read here for more
        </Text>
      </Box>
    </a>
  );
};
