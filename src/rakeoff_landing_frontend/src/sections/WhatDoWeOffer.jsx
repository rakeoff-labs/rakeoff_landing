import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Center,
  Container,
} from "@chakra-ui/react";
import staking from "../../assets/staking_safe.png";
import prizePoolLogo from "../../assets/prize_pool_logo.png";
import ckbtcLogo from "../../assets/ckbtc_logo.png";
import { boxBackgroundColor, boxBorderColor, boxFontColor } from "../colors";

const BoxAndImage = ({ image, heading, content }) => {
  return (
    <Box
      bg={boxBackgroundColor}
      border={boxBorderColor}
      borderRadius="3xl"
      py={12}
      px={8}
      color="white"
      align="center"
    >
      <Image src={image} alt={heading} h={{ base: 150, md: 150, lg: 200 }} />
      <Heading
        size={"lg"}
        noOfLines={1}
        textAlign="center"
        my={5}
        color="white"
      >
        {heading}
      </Heading>
      <Text textAlign="center" maxW="xs" noOfLines={3} color={boxFontColor}>
        {content}
      </Text>
    </Box>
  );
};

const WhatDoWeOffer = () => {
  return (
    <Container mt={{ base: 12, md: "5rem" }} maxW="7xl" p={0}>
      <Center mb={5}>
        <Heading
          bgGradient="linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)"
          bgClip="text"
          size="xl"
        >
          What do we offer?
        </Heading>
      </Center>

      <SimpleGrid
        columns={[1, 1, 3]}
        spacing={8}
        mx={{ base: 3, md: 3, lg: 0 }}
      >
        <BoxAndImage
          image={staking}
          heading={"Stake your ICP"}
          content="A simplified and streamlined way to stake your ICP tokens and earn ICP staking rewards."
        />
        <BoxAndImage
          image={prizePoolLogo}
          heading={"Pool your rewards"}
          content="The option to disburse your ICP staking rewards into the no-loss prize pool for a chance to win big."
        />
        <BoxAndImage
          image={ckbtcLogo}
          heading={"Earn ckBTC"}
          content="The option to disburse your ICP staking rewards directly as ckBTC via our in-built smart contract swap."
        />
      </SimpleGrid>
    </Container>
  );
};

export default WhatDoWeOffer;
