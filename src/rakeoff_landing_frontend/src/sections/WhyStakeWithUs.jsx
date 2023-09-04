import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { boxBorderColor, boxBackgroundColor } from "../colors";
import safe from "../../assets/safe.svg";
import roman_numeral from "../../assets/roman_numeral.svg";
import prize_pool from "../../assets/prize_pool.svg";
import ckBtc from "../../assets/ckBtc.svg";
import APY from "../../assets/APY.svg";

const Card = ({ heading, description, image }) => {
  return (
    <Box
      w="100%"
      borderWidth="1px"
      borderRadius="3xl"
      border={boxBorderColor}
      p={2}
      bg={boxBackgroundColor}
    >
      <Stack align={"start"} spacing={4}>
        <Flex align={"center"} justify={"center"}>
          <Image src={image} alt={heading} w={"160px"} h={"150px"} />
        </Flex>
        <Box mt={4}>
          <Heading size="md" p={2}>
            {heading}
          </Heading>
          <Text mt={1} p={2} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} p={2} size={"sm"}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function WhyStakeWithUs() {
  return (
    <Box p={8}>
      <Stack textAlign={"center"}>
        <Heading
          bgGradient="linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)"
          bgClip="text"
          size="xl"
        >
          Why stake with us?
        </Heading>
      </Stack>

      <Container maxW={"7xl"} p={0} mt={4}>
        <SimpleGrid columns={[1, 1, 3]} spacing={4}>
          <Card
            heading={"Simplified staking experience"}
            image={safe}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
          />
          <Card
            heading={"No-loss prize pool"}
            image={prize_pool}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
          />
          <Card
            heading={"Earn ckBTC"}
            image={ckBtc}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
          />
          <Card
            heading={"Real-time market prices"}
            image={APY}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
          />
          <Card
            heading={"Staked ICP achievement bonuses"}
            image={roman_numeral}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
