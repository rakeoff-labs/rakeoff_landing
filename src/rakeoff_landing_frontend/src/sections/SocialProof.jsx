import React from "react";
import {
  Image,
  Text,
  Container,
  Flex,
  SimpleGrid,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import dfi from "../../assets/dfi.png";
import icp from "../../assets/icp.png";
import winner from "../../assets/winner.png";
import motok from "../../assets/motok.png";
import { boxFontColor } from "../colors";

const SocialProof = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <Container maxW="7xl" mt={{ base: 6, md: 3 }} p={2}>
      <Text style={imageStyles}>Backed by & Featured on</Text>
      {isMobile ? <MobileDisplay /> : <DesktopDisplay />}
    </Container>
  );
};

const MobileDisplay = () => {
  return (
    <Container maxW="7xl" mt={{ base: 6, md: 3 }} p={2}>
      <SimpleGrid columns={2} w="100%">
        <SocialProofBox
          image={icp}
          link={
            "https://medium.com/encode-club/internet-computer-buidl-bitcoin-hackathon-powered-by-encode-summary-and-winners-3ecb2daf6921"
          }
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
        />
        <SocialProofBox
          image={dfi}
          link={"https://internetcomputer.org/docs/current/motoko/main/motoko"}
        />
        <Podcast />
      </SimpleGrid>
    </Container>
  );
};

const DesktopDisplay = () => {
  return (
    <Container maxW="7xl" mt={{ base: 6, md: 1 }} p={0}>
      <SimpleGrid columns={5} w="50%">
        <SocialProofBox
          image={icp}
          link={
            "https://medium.com/encode-club/internet-computer-buidl-bitcoin-hackathon-powered-by-encode-summary-and-winners-3ecb2daf6921"
          }
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
        />
        <SocialProofBox
          image={dfi}
          link={"https://internetcomputer.org/docs/current/motoko/main/motoko"}
        />
        <Podcast />
      </SimpleGrid>
    </Container>
  );
};
const imageStyles = {
  filter: "brightness(50%) grayscale(100%) ",
};

const Podcast = () => {
  return (
    <a
      href="https://rss.com/podcasts/lets-talk-icp/1093489/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Text
        // textAlign="start"
        fontFamily="Courier New, monospace"
        mt={5}
        as="b"
        textAlign="start"
        color={boxFontColor}
        noOfLines={2}
        maxW="100px"
        style={imageStyles}
        p={1.5}
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
        src={image}
        h={{ base: 150, md: 150, lg: 100 }}
        w="auto"
        style={imageStyles}
      />
    </a>
  );
};

export default SocialProof;
