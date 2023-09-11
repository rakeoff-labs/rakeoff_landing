import React from "react";
import {
  Image,
  Text,
  Container,
  SimpleGrid,
  useBreakpointValue,
  Center,
  Heading,
  Flex,
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
    <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
      <Center mb={5}>
        <Heading size="md" style={imageStyles}>
          Backed by & Featured on{" "}
        </Heading>
      </Center>
      {isMobile ? <MobileDisplay /> : <DesktopDisplay />}
    </Container>
  );
};

const MobileDisplay = () => {
  return (
    <Container maxW="7xl" mt={{ base: 6, md: 3 }} p={0}>
      <SimpleGrid columns={2} align="center" w="100%">
        <SocialProofBox
          image={icp}
          link={"https://internetcomputer.org/ecosystem"}
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
        <SocialProofBox image={dfi} link={"https://dfinity.org/grants"} />
        <Podcast />
      </SimpleGrid>
    </Container>
  );
};

const DesktopDisplay = () => {
  return (
    <Container maxW="9xl" mt={{ base: 6, md: 3 }}>
      <Center>
        <SimpleGrid
          align="center"
          mx={{ base: 3, md: 3, lg: 0 }}
          columns={5}
          w="100%"
          spacing={8}
        >
          <SocialProofBox
            image={icp}
            link={"https://internetcomputer.org/ecosystem"}
          />

          <SocialProofBox
            image={winner}
            link={
              "https://medium.com/encode-club/internet-computer-buidl-bitcoin-hackathon-powered-by-encode-summary-and-winners-3ecb2daf6921"
            }
          />

          <SocialProofBox
            image={motok}
            link={
              "https://internetcomputer.org/docs/current/motoko/main/motoko"
            }
          />
          <SocialProofBox image={dfi} link={"https://dfinity.org/grants"} />

          <Podcast />
        </SimpleGrid>
      </Center>
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
        fontFamily="Courier New, monospace"
        mt={8}
        as="b"
        textAlign="start"
        color={boxFontColor}
        noOfLines={5}
        maxW="100px"
        style={imageStyles}
        p={2}
      >
        Lets Talk ICP <ExternalLinkIcon color={boxFontColor} mb={1} />
      </Text>
    </a>
  );
};

const SocialProofBox = ({ image, link }) => {
  return (
    <Flex>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image
          src={image}
          h={{ base: 150, md: 150, lg: 150 }}
          mx="auto"
          style={imageStyles}
        />
      </a>
    </Flex>
  );
};

export default SocialProof;
