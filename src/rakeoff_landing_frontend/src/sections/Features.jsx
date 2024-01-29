import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Box,
  Heading,
  Text,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  SimpleGrid,
  Container,
  Image,
} from "@chakra-ui/react";
import ether from "../../assets/ether.png";
import { boxBackgroundColor } from "../colors";

const Features = () => {
  return (
    <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
      <Center mb={8}>
        <Heading size={{ base: "2xl", md: "3xl" }} color="white">
          Staking with Rakeoff
        </Heading>
      </Center>
      <SimpleGrid
        columns={[1, null, 2]}
        mx={{ base: 3, md: 3, lg: 0 }}
        gap={{ base: 4, md: 8 }}
      >
        <FeaturesCard
          image={ether}
          heading={"Secured with Motoko"}
          text={"Built with robust & tramperproof smart contracts"}
        />
        <FeaturesCard
          image={ether}
          heading={"Simple staking"}
          text={"Simply transfer ICP to your wallet and click 'Stake'"}
        />

        <FeaturesCard
          image={ether}
          heading={"No-loss prize pool"}
          text={"Disburse your staked rewards into the pool"}
        />
        <FeaturesCard
          image={ether}
          heading={"Liquid staking"}
          text={"Coming soon..."}
        />
      </SimpleGrid>
    </Container>
  );
};

export default Features;

const FeaturesCard = ({ image, heading, text }) => {
  return (
    <Center py={6}>
      <Box
        w="2xl"
        borderRadius="3xl"
        overflow={"hidden"}
        bg={"white"}
        borderColor="black"
        boxShadow={useColorModeValue(
          "10px 10px 0 purple",
          "10px 10px 0 blueviolet"
        )}
      >
        <Box h={"250px"} borderBottom={"1px"} borderColor="black">
          <Image
            src={image}
            roundedTop={"sm"}
            h={80}
            w="full"
            alt={"Blog Image"}
          />
        </Box>
        <Box bg={boxBackgroundColor} p={4}>
          <Heading color={"grey.100"} fontSize={"3xl"} noOfLines={1}>
            {heading}
          </Heading>
          <Text color="grey.400" fontSize={"lg"} fontWeight="medium">
            {text}
          </Text>
        </Box>
        <HStack borderTop={"1px"} color="black">
          <Flex
            bg={boxBackgroundColor}
            p={4}
            alignItems="center"
            justifyContent={"space-between"}
            roundedBottom={"sm"}
            cursor={"pointer"}
            w="full"
          ></Flex>
        </HStack>
      </Box>
    </Center>
  );
};
