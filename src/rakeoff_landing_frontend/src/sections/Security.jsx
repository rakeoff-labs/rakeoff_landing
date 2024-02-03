import React from "react";

import {
  Text,
  Heading,
  Image,
  Stack,
  Container,
  Center,
  Box,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import motoko from "../../assets/socialproof_motoko_shield.webp";
import dfinity from "../../assets/socialproof_dfinity_logo.webp";
import team from "../../assets/socialproof_team_photo.webp";
import tvl from "../../assets/socialproof_tvl_chart.webp";
import { boxBackgroundColor, boxBorderColor, boxFontColor } from "../colors";

const Security = () => {
  return (
    <Container maxW={"7xl"} mt={{ base: 12, md: "5rem" }} p={0}>
      <Center mb={8}>
        <Heading
          size={{ base: "2xl", md: "3xl" }}
          textAlign="center"
          color="white"
        >
          Trusted by the Ecosystem
        </Heading>
      </Center>

      <SimpleGrid columns={[1, null, 4]} mx={{ base: 3, md: 3, lg: 0 }} gap={8}>
        <SecuirtyBox
          image={tvl}
          heading={"Over $100k TVL"}
          link={"https://analytics.rakeoff.io/"}
        />
        <SecuirtyBox
          image={motoko}
          heading={"Robust smart-contracts"}
          link={"https://internetcomputer.org/docs/current/motoko/main/motoko"}
        />
        <SecuirtyBox
          image={dfinity}
          heading={"Dfinity grant recipient"}
          link={"https://dfinity.org/grants"}
        />
        <SecuirtyBox
          image={team}
          heading={"Learn about the team"}
          link={"https://docs.rakeoff.io/rakeoff/team"}
        />
      </SimpleGrid>
    </Container>
  );
};
export default Security;

const SecuirtyBox = ({ image, link, heading }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Box
        bg={boxBackgroundColor}
        border={boxBorderColor}
        borderColor="black"
        overflow={"hidden"}
        rounded={"2xl"}
        borderRadius="3xl"
        boxShadow={useColorModeValue(
          "10px 10px 0 purple",
          "10px 10px 0 blueviolet"
        )}
        transition="transform 0.3s"
        _hover={{ transform: "translateY(-5px)" }}
        cursor="pointer"
        w="100%"
      >
        <Image
          src={image}
          h={"100%"}
          w="100%"
          objectFit="cover"
          alt={"Rakeoff feature Image"}
        />
        <Stack mt="6" mb={4} spacing="3">
          <Text
            textAlign="center"
            fontSize={{ base: "lg", lg: "xl" }}
            fontWeight={400}
            mb={2}
            color={"gray.100"}
          >
            {heading} <ExternalLinkIcon color={boxFontColor} mb={1} />
          </Text>
        </Stack>
      </Box>
    </a>
  );
};
