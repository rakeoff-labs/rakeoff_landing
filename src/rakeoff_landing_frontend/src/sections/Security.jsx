import React from "react";

import {
  Flex,
  Text,
  Heading,
  Image,
  Stack,
  Container,
  Center,
  Box,
  VStack,
  useBreakpointValue,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import motoko from "../../assets/motoko.svg";
import dfinity from "../../assets/dfinity.svg";
import team from "../../assets/team.svg";
import tvl from "../../assets/tvl.svg";
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

      <SimpleGrid
        columns={[1, null, 4]}
        mx={{ base: 3, md: 3, lg: 0 }}
        gap={{ base: 4, md: 8 }}
      >
        <SecuirtyBox
          image={tvl}
          heading={"Over $100k total value locked"}
          link={"https://analytics.rakeoff.io/"}
        />
        <SecuirtyBox
          image={motoko}
          heading={"Robust smart-contracts"}
          link={"https://internetcomputer.org/docs/current/motoko/main/motoko"}
        />
        <SecuirtyBox
          image={dfinity}
          heading={"Part of the grants programme"}
          link={"https://dfinity.org/grants"}
        />
        <SecuirtyBox
          image={team}
          heading={"Learn more about the Team"}
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
          h={60}
          w="100%"
          objectFit="cover"
          alt={"Rakeoff feature Image"}
        />
        <Stack mt="6" mb={4} spacing="3">
          <Text textAlign="center" fontSize="md" mb={2} color={"gray.100"}>
            {heading} <ExternalLinkIcon color={boxFontColor} mb={1} />
          </Text>
        </Stack>
      </Box>
    </a>
  );
};
