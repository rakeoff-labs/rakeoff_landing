import React from "react";
import {
  Image,
  Text,
  Container,
  SimpleGrid,
  Center,
  Heading,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
// import dfi from "../../assets/dfi.png";
// import icp from "../../assets/icp_1.png";
// import winner from "../../assets/winner.png";
// import motok from "../../assets/motok.png";
import { boxFontColor } from "../colors";

const imageStyles = {
  filter: "brightness(50%) grayscale(100%) ",
};

const SocialProof = () => {
  return (
    <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
      <Center mb={10}>
        <Heading size="md" style={imageStyles}>
          Backed by & featured on
        </Heading>
      </Center>
      <SimpleGrid columns={[3, null, 5]} align="center" w="100%">
        {/* <SocialProofBox
          image={icp}
          link={"https://internetcomputer.org/ecosystem?tag=DeFi"}
        />

        <SocialProofBox
          image={winner}
          link={
            "https://medium.com/encode-club/internet-computer-buidl-bitcoin-hackathon-powered-by-encode-summary-and-winners-3ecb2daf6921"
          }
        />

        <SocialProofBox
          image={motok}
          link={"https://internetcomputer.org/docs/current/motoko/main/motoko"}
        /> */}
        <SocialProofBox image={dfi} link={"https://dfinity.org/grants"} />
        <Podcast />
      </SimpleGrid>
    </Container>
  );
};

export default SocialProof;

const Podcast = () => {
  return (
    <a
      href="https://rss.com/podcasts/lets-talk-icp/1093489/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Text
        _hover={{ opacity: "0.8" }}
        fontFamily="Courier New, monospace"
        as="b"
        textAlign="start"
        color={boxFontColor}
        noOfLines={5}
        maxW="200px"
        style={imageStyles}
        p={2}
        fontSize="3xl"
      >
        Lets Talk ICP <ExternalLinkIcon color={boxFontColor} mb={1} />
      </Text>
    </a>
  );
};

const SocialProofBox = ({ image, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Image
        _hover={{ opacity: "0.8" }}
        src={image}
        h={{ base: 120, md: 100, lg: 90 }}
        w={{ base: 120, md: 100, lg: 150 }}
        mx="auto"
        style={imageStyles}
      />
    </a>
  );
};
