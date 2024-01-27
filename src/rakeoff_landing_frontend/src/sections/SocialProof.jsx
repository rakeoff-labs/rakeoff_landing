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

// const marqueeVariants = {
//   animate: {
//     x: [0, -2070], // This should be double the width of your total content
//     transition: {
//       x: {
//         repeat: Infinity,
//         duration: 8,
//         ease: "linear",
//       },
//     },
//   },
// };
const SocialProof = () => {
  return (
    <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} bg="red" p={0}>
      <SimpleGrid
        columns={[2, null, 10]}
        mx={{ base: 3, md: 3, lg: 0 }}
        gap={{ base: 4, md: 8 }}
      >
        <SocialProofBox
          image={icpBadge}
          link={"https://internetcomputer.org/ecosystem?tag=DeFi"}
          description={"Recognized in the ICP Showcase"}
        />

        <SocialProofBox
          image={dfinityBadge}
          link={"https://dfinity.org/grants"}
          description={"Backed by the Dfinity Grants Program"}
        />

        <SocialProofBox
          image={motokoBadge}
          link={"https://internetcomputer.org/docs/current/motoko/main/motoko"}
          description={"Secured by Robust Smart Contracts"}
        />
      </SimpleGrid>
    </Container>
  );
};

export default SocialProof;

const SocialProofBox = ({ image, link, description }) => {
  return (
    <>
      {/* <motion.div
        variants={marqueeVariants}
        animate="animate"
        viewport={{ once: true, amount: 0.2 }}
        style={{ display: "flex", width: "auto" }}
      > */}
      <Flex
        align="center"
        color="red"
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
                h={"70px"}
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
      {/* </motion.div> */}
    </>
  );
};
