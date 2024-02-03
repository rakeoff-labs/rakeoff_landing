import React from "react";
import {
  Box,
  Heading,
  Text,
  Center,
  useColorModeValue,
  SimpleGrid,
  Container,
  Image,
} from "@chakra-ui/react";
import chart from "../../assets/feature_analysis_chart.webp";
import prize from "../../assets/feature_prize_pool.webp";
import bonus from "../../assets/feature_bonus_staking.webp";

import simple from "../../assets/feature_simplified_staking.webp";

import { boxBackgroundColor, boxFontColor } from "../colors";

const Features = () => {
  return (
    <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
      <Center mb={8}>
        <Heading size={{ base: "2xl", md: "3xl" }} color="white">
          Staking with Rakeoff
        </Heading>
      </Center>
      <SimpleGrid columns={[1, null, 2]} mx={{ base: 3, md: 3, lg: 0 }} gap={8}>
        <FeaturesCard
          image={simple}
          heading={"Simple staking"}
          text={"Start staking and earning rewards with a single click"}
        />
        <FeaturesCard
          image={prize}
          heading={"No-loss Prize pool"}
          text={"Potentially win big by entering an ICP prize pool"}
        />
        <FeaturesCard
          image={bonus}
          heading={"Staked ICP bonuses"}
          text={"Climb achievement levels and earn staked ICP bonuses"}
        />

        <FeaturesCard
          image={chart}
          heading={"Analysis & Insights"}
          text={"View APY estimates, portfolio analysis and key insights"}
        />
      </SimpleGrid>
    </Container>
  );
};

export default Features;

const FeaturesCard = ({ image, heading, text }) => {
  return (
    <Center>
      <Box
        w="100%"
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

        <Box bg={boxBackgroundColor} px={{ base: 4, md: 6, lg: 8 }} py={6}>
          <Heading
            textAlign={{ base: "center", md: "start" }}
            color={"white"}
            fontSize={"3xl"}
            noOfLines={1}
          >
            {heading}
          </Heading>
          <Text
            textAlign={{ base: "center", md: "start" }}
            color={boxFontColor}
            fontSize={{ base: "lg", lg: "xl" }}
          >
            {text}
          </Text>
        </Box>
      </Box>
    </Center>
  );
};
