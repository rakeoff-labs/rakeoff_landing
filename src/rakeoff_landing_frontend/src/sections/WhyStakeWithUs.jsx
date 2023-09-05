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
  Center,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { boxBorderColor, boxBackgroundColor } from "../colors";
import staking_icp from "../../assets/staking_icp.svg";
import roman_numer from "../../assets/roman_numer.svg";
import prize_pool from "../../assets/prize_pool.svg";
import ckBtc from "../../assets/ckBtc.svg";
import market_price from "../../assets/market_price.svg";

const Card = ({ heading, description, image, setFlex }) => {
  return (
    <Box
      // maxW={{ base: "full", md: "275px" }}
      // w={"full"}
      // W={"100%"}
      borderWidth="1px"
      borderRadius="3xl"
      border={boxBorderColor}
      p={3}
      bg={boxBackgroundColor}
      transition="transform 0.3s"
      _hover={{ transform: "translateY(-5px)" }}
      cursor="pointer"
    >
      <Flex align="center" justify="start">
        <Image
          src={image}
          alt={heading}
          p={-2}
          m={0}
          ml={-8}
          mt={-6}
          w={"160px"}
          h={"150px"}
        />
      </Flex>
      <Stack align={"start"} spacing={6}>
        <Box>
          <Heading size="md" mt={-4} p={2}>
            {heading}
          </Heading>
          <Text mt={1} p={2} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        {/* <Button variant={"link"} colorScheme={"blue"} p={2} size={"sm"}>
          Learn more
        </Button> */}
      </Stack>
    </Box>
  );
};

export default function WhyStakeWithUs() {
  return (
    <Container maxW={"7xl"} p={0} mt={{ base: 12, md: "5rem" }}>
      <Stack mb={5} textAlign={"center"}>
        <Heading
          bgGradient="linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)"
          bgClip="text"
          size="xl"
        >
          Why stake with us?
        </Heading>
      </Stack>

      {/* <Flex flexWrap="wrap" gap={8} justify="center"> */}
      <SimpleGrid
        columns={[1, 1, 3]}
        spacing={8}
        mx={{ base: 3, md: 3, lg: 0 }}
      >
        <Card
          heading={"Simplified staking experience"}
          image={staking_icp}
          description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
        />
        <Card
          heading={"No-loss prize pool"}
          image={prize_pool}
          description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
        />
        <Card
          heading={"Earn ckBTC"}
          image={ckBtc}
          description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
        />
        <Card
          heading={"Real-time market prices"}
          image={market_price}
          description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
        />
        <Card
          heading={"Staked ICP achievement bonuses"}
          image={roman_numer}
          description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
        />
        <Card
          heading={"Staked ICP achievement bonuses"}
          image={roman_numer}
          description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
        />
      </SimpleGrid>
      {/* </Flex> */}
    </Container>
  );
}
