import React from "react";
import { Box, Heading, SimpleGrid, Image, Text, Center } from "@chakra-ui/react";
import staking from "../assets/staking.png";
import cart from "../assets/cart.png";
import icpbit from "../assets/icpbit.png";

const Services = () => {
  return (
    <Box py={["4", "8", "12"]}>
      <Center mb={5}>
        <Heading
          bgGradient="linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)"
          bgClip="text"
          size="xl"
        >
          What do we offer?
        </Heading>
      </Center>

      <Center>
        <SimpleGrid columns={[1, 1, 3]} spacing={8}>
          <BoxAndImage
            image={staking}
            heading={"Stake your ICP"}
            content="A simplified and streamlined staking experience"
          />
          <BoxAndImage
            image={cart}
            heading={"Pool your Rewards"}
            content="Pool your ICP staking rewards and win the no-loss prize pool"
          />
          <BoxAndImage
            image={icpbit}
            heading={"Earn ckBTC"}
            content="Disburse your ICP staking rewards as ckBTC"
          />
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default Services;

const BoxAndImage = ({ image, heading, content }) => {
  const isLastImage = image === icpbit;

  return (
    <Box
      bg={"#1e1f23"}
      border={"1px solid #a5a6a7"}
      borderRadius="3xl"
      py={12}
      px={8}
      color="white"
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Image
        src={image}
        alt={heading}
        h={200}
        bg={isLastImage ? "transparent" : "grey"}
        borderRadius={isLastImage ? undefined : "full"}
        p={isLastImage ? undefined : 3}
      />
      <Heading size="lg" textAlign="center" my={5}>
        {heading}
      </Heading>
      <Text textAlign="center">{content}</Text>
    </Box>
  );
};
