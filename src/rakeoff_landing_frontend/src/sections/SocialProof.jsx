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
import { motion } from "framer-motion";

const containerAnimation = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
const itemAnimation = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 40,
    opacity: 1,
    transition: {
      duration: 0.5, // Duration of the animation for each child
      ease: "easeInOut",
    },
  },
};
const SocialProof = () => {
  return (
    <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
      <motion.div
        variants={containerAnimation}
        style={{ width: "100%" }}
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SimpleGrid
          columns={[2, null, 5]}
          mx={{ base: 3, md: 3, lg: 0 }}
          gap={{ base: 4, md: 8 }}
        >
          <SocialProofBox
            image={icpBadge}
            link={"https://internetcomputer.org/ecosystem?tag=DeFi"}
            description={"Recognized in the ICP Showcase"}
          />

          <SocialProofBox
            image={encodeBadge}
            link={
              "https://www.blog.encode.club/internet-computer-buidl-bitcoin-hackathon-powered-by-encode-summary-and-winners-3ecb2daf6921"
            }
            description={"Encode x Dfinity Hackathon Winner"}
          />

          <SocialProofBox
            image={dfinityBadge}
            link={"https://dfinity.org/grants"}
            description={"Backed by the Dfinity Grants Program"}
          />

          <SocialProofBox
            image={motokoBadge}
            link={
              "https://internetcomputer.org/docs/current/motoko/main/motoko"
            }
            description={"Secured by Robust Smart Contracts"}
          />
          <SocialProofBox
            image={podcastBadge}
            link={"https://rss.com/podcasts/lets-talk-icp/1093489/"}
            description={"As Heard on Let's Talk ICP Podcast"}
          />
        </SimpleGrid>
      </motion.div>
    </Container>
  );
};

export default SocialProof;

const SocialProofBox = ({ image, link, description }) => {
  return (
    <>
      <motion.div
        variants={itemAnimation}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        style={{ width: "100%" }}
      >
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
            <VStack gap={3}>
              <Box align="center" filter="grayscale(100%)">
                <Image
                  src={image}
                  alt="SocialProofLogo"
                  w="auto"
                  h={"80px"}
                  objectFit="contain"
                  mx="auto"
                  color="grey"
                />
              </Box>
              <Text textAlign="center" fontSize={"sm"} color={boxFontColor}>
                {description} <ExternalLinkIcon color={boxFontColor} mb={1} />
              </Text>
            </VStack>
          </a>
        </Flex>
      </motion.div>
    </>
  );
};
