import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Center,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import rakeoffBank from "../../assets/rakeoff_bank.png";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { boxBackgroundColor, boxBorderColor, boxFontColor } from "../colors";

const MoreOnRakeoff = () => {
  return (
    <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
      <Center mb={8}>
        <Heading size={{ base: "2xl", md: "3xl" }} color="white">
          More on Rakeoff
        </Heading>
      </Center>

      <Center>
        <SimpleGrid
          columns={[1, 1, 2]}
          gap={8}
          mx={{ base: 3, md: 3, lg: 0 }}
          w="100%"
          templateAreas={[
            `"allInfo"
            "WhatIsStaking"
            "HowDoIEarnRewards"
            "smartcontracts"`,
            null,
            `"allInfo WhatIsStaking"
            "allInfo HowDoIEarnRewards"
            "allInfo smartcontracts"`,
          ]}
        >
          <Box gridArea="allInfo">
            <a href="https://docs.rakeoff.io/" target="_blank">
              <Box
                bg={boxBackgroundColor}
                border={boxBorderColor}
                borderRadius="3xl"
                borderColor="black"
                boxShadow={useColorModeValue(
                  "10px 10px 0 purple",
                  "10px 10px 0 blueviolet"
                )}
                py={12}
                px={8}
                transition="transform 0.3s"
                _hover={{ transform: "translateY(-5px)" }}
                cursor="pointer"
                h="100%"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${rakeoffBank})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Heading size="lg" textAlign="center" color="white">
                  Visit the Rakeoff documentation{" "}
                  <ExternalLinkIcon color="white" mb={1} />
                </Heading>
                <Text
                  textAlign="center"
                  fontSize={{ base: "lg", lg: "xl" }}
                  fontWeight={400}
                  color={boxFontColor}
                  my={5}
                >
                  Step-by-step guides, video tutorials, smart contract
                  documentation and more.
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
              info={"Staking ICP in the Rakeoff dApp."}
            />
          </Box>
          <Box gridArea="HowDoIEarnRewards">
            <StoryBoxAndImage
              heading="No-loss prize pool"
              link={
                "https://docs.rakeoff.io/rakeoff/tutorials-and-guides/the-no-loss-prize-pool"
              }
              info={"How to use the Rakeoff no-loss prize pool."}
            />
          </Box>
          <Box gridArea="smartcontracts">
            <StoryBoxAndImage
              heading="Smart contracts"
              link={"https://docs.rakeoff.io/rakeoff/for-developers"}
              info={"All about the tech powering Rakeoff."}
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
        borderColor="black"
        boxShadow={useColorModeValue(
          "10px 10px 0 purple",
          "10px 10px 0 blueviolet"
        )}
      >
        <Heading size="lg" textAlign="center" mb={3} color="white">
          {heading} <ExternalLinkIcon color="white" mb={1} />
        </Heading>
        <Text
          textAlign="center"
          fontSize={{ base: "lg", lg: "xl" }}
          fontWeight={400}
          maxW={"sm"}
          color={boxFontColor}
        >
          {info}
        </Text>
      </Box>
    </a>
  );
};
