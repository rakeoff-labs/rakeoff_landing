import React from "react";
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
import chart from "../../assets/feature_analysis_chart.svg";
import prize from "../../assets/feature_prize_pool.svg";
import bonus from "../../assets/feature_bonus_staking.svg";

import simple from "../../assets/feature_simplified_staking.svg";

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
          image={simple}
          heading={"Simple staking"}
          text={"Begin staking with just the click of a button"}
        />
        <FeaturesCard
          image={prize}
          heading={"No-loss prize pool"}
          text={"Disburse your staked rewards into the pool"}
        />
        <FeaturesCard
          image={bonus}
          heading={"Staked ICP bonuses"}
          text={"Stake ICP with us and earn bonus rewards"}
        />

        <FeaturesCard
          image={chart}
          heading={"Analysis & Insights"}
          text={"View your portfolio's performance"}
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
        borderColor="black"
        boxShadow={useColorModeValue(
          "10px 10px 0 purple",
          "10px 10px 0 blueviolet"
        )}
      >
        <Image
          src={image}
          h={60}
          w="100%"
          objectFit="cover"
          alt={"Rakeoff feature Image"}
        />

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
