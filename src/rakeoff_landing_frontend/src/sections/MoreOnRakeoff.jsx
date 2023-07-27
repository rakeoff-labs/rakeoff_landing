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
import { boxBackgroundColor, boxBorderColor, boxFontColor } from "../colors";

const MoreOnRakeoff = () => {
  return (
    <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
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
            <a href="https://docs.rakeoff.io/" target="_blank">
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
                  Guides, video tutorials, smart contract documentation and more.
                </Text>
              </Box>
            </a>
          </Box>
          <Box gridArea="WhatIsStaking">
            <StoryBoxAndImage
              heading="Staking on Rakeoff"
              link={
                "https://docs.rakeoff.io/rakeoff/tutorials-and-guides/staking-on-rakeoff"
              }
              info={
                "Staking ICP in the Rakeoff dApp."
              }
            />
          </Box>
          <Box gridArea="HowDoIEarnRewards">
            <StoryBoxAndImage
              heading="The no-loss prize pool"
              link={
                "https://docs.rakeoff.io/rakeoff/tutorials-and-guides/the-no-loss-prize-pool"
              }
              info={
                "How to use the Rakeoff no-loss prize pool."
              }
            />
          </Box>
          <Box gridArea="ckbtcIntegration">
            <StoryBoxAndImage
              heading="Earning ckBTC"
              link={
                "https://docs.rakeoff.io/rakeoff/tutorials-and-guides/earning-ckbtc"
              }
              info={
                "How to earn ckBTC in the Rakeoff dApp."
              }
            />
          </Box>
        </SimpleGrid>
      </Center>
    </Container>
  );
};

export default MoreOnRakeoff;

const StoryBoxAndImage = ({ heading, link, info }) => {
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
        align="center"
      >
        <Heading size="lg" textAlign="center" mb={3} color="white">
          {heading} <ExternalLinkIcon color="white" mb={1} />
        </Heading>
        <Text textAlign="center" maxW={"sm"} color={boxFontColor}>
          {info}
        </Text>
      </Box>
    </a>
  );
};
