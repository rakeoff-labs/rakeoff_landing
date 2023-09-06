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
import simplified from "../../assets/simplified.svg";
import chart_up from "../../assets/chart_up.svg";
import trophy from "../../assets/trophy.svg";
import globe from "../../assets/globe.svg";
import pie_chart from "../../assets/pie_chart.svg";
import coil from "../../assets/coil.svg";

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
      overflow="hidden"
    >
      <Flex
        rounded={"full"}
        color={"white"}
        bgGradient="linear(to-t, #6528c8, #a25fc2)"
        w={"90px"}
        h={"90px"}
        mb={4}
        p={2}
        justify="center"
        align="center"
        // overflow="hidden"
      >
        <Image
          src={image}
          alt={heading}
          // w={"150px"}
          m={-5}
          mt={-5}
          // bg="green"
        />
      </Flex>
      <Stack align={"start"} spacing={6}>
        <Box>
          <Heading size="md" mt={-3} ml={-1} p={3}>
            {heading}
          </Heading>
          <Text mt={1} p={2} m={-2} ml={-0.5} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
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

      <SimpleGrid
        columns={[1, 1, 3]}
        spacing={8}
        mx={{ base: 3, md: 3, lg: 0 }}
      >
        <Card
          heading={"Simplified staking experience"}
          image={simplified}
          description={
            "A simplified and streamlined way to stake your ICP tokens and earn ICP staking rewards."
          }
        />
        <Card
          heading={"No-loss prize pool"}
          image={trophy}
          description={
            "The option to disburse your ICP staking rewards into the no-loss prize pool for a chance to win big."
          }
        />
        <Card
          heading={"Earn ck Crypto"}
          image={globe}
          description={
            "The option to disburse your ICP staking rewards directly as ckBTC via our in-built smart contract swap."
          }
        />
        <Card
          heading={"Asset monitoring"}
          image={pie_chart}
          description={
            "Your dashboard for tracking asset performance, market prices, and estimating your APY, all in one place."
          }
        />
        <Card
          heading={"Staked ICP achievement bonuses"}
          image={chart_up}
          description={
            "Unlock extra ICP bonuses by achieving staking milestones with Rakeoff."
          }
        />
        <Card
          heading={"Secured transactions"}
          image={coil}
          description={
            "Transactions are safeguarded by the Motoko smart contracts, ensuring your assets are secure at all times."
          }
        />
      </SimpleGrid>
    </Container>
  );
}
