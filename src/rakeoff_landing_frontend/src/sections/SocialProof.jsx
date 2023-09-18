import React from "react";
import {
  Image,
  Text,
  Container,
  SimpleGrid,
  Flex,
  VStack,
  Box,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import icpBadge from "../../assets/internet_computer_badge.png";
import encodeBadge from "../../assets/encode_winning_badge.png";
import dfinityBadge from "../../assets/dfinity_badge.png";
import motokoBadge from "../../assets/motoko_badge.png";
import podcastBadge from "../../assets/podcast_badge.png";
import { boxBorderColor, boxFontColor } from "../colors";

const imageStyles = {
  filter: "brightness(50%) grayscale(100%) ",
};

const SocialProof = () => {
  return (
    <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
      <SimpleGrid
        columns={[2, null, 5]}
        mx={{ base: 3, md: 3, lg: 0 }}
        gap={{ base: 4, md: 8 }}
      >
        <SocialProofBox
          image={icpBadge}
          link={"https://internetcomputer.org/ecosystem?tag=DeFi"}
          description={"Officially recognized in the ICP Ecosystem"}
        />
        <SocialProofBox
          image={encodeBadge}
          link={
            "https://medium.com/encode-club/internet-computer-buidl-bitcoin-hackathon-powered-by-encode-summary-and-winners-3ecb2daf6921"
          }
          description={"Encode x Dfinity Hackathon Winner"}
        />
        <SocialProofBox
          image={dfinityBadge}
          link={"https://dfinity.org/grants"}
          description={"Backed by the Dfinity Grants program"}
        />
        <SocialProofBox
          image={motokoBadge}
          link={"https://internetcomputer.org/docs/current/motoko/main/motoko"}
          description={"Secured by Robust Smart Contracts"}
        />
        <SocialProofBox
          image={podcastBadge}
          link={"https://rss.com/podcasts/lets-talk-icp/1093489/"}
          description={"As Heard on Let's Talk ICP Podcast"}
        />
      </SimpleGrid>
    </Container>
  );
};

export default SocialProof;

const SocialProofBox = ({ image, link, description }) => {
  return (
    <Flex
      align="center"
      borderLeft={boxBorderColor}
      borderBottom={boxBorderColor}
      borderRadius="3xl"
      p={3}
      pt={5}
      transition="transform 0.3s"
      _hover={{ transform: "translateY(-5px)" }}
      cursor="pointer"
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <VStack gap={3} style={imageStyles}>
          <Box align="center">
            <Image src={image} h={"80px"} mx="auto" />
          </Box>
          <Text textAlign="center" fontSize={"sm"} color={boxFontColor}>
            {description} <ExternalLinkIcon color={boxFontColor} mb={1} />
          </Text>
        </VStack>
      </a>
    </Flex>
  );
};
