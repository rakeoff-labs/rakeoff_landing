import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Center,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import icp from "../assets/icp.png";
import fix from "../assets/fix.png";
import icpbit from "../assets/icpbit.png";

const Services = () => {
  return (
    <Box py={["4", "8", "12"]}>
       <Center mb={5}>
    <Heading
      bgGradient="linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)"
      bgClip="text"
      size="xl"
    >What do we offer?</Heading>
      </Center>

      <Center>
        <SimpleGrid columns={[1, 3, 3]} spacing={8}>
          <BoxAndImage
            image={icp}
            heading={"Stake your ICP"}
            content="A simplified and streamlined staking experience"
          />
          <BoxAndImage
            image={fix}
            heading={"Pool your rewards"}
            content="Pool your ICP staking rewards and win the No-loss prize pool"
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
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Box
        bg={"#1e1f23"}
        border={"1px solid #a5a6a7"}
        borderRadius="3xl"
        py={12}
        px={8}
        color="white"
      >
        <Image
          src={image}
          alt={heading}
          h={200}
          bg="white"
          borderRadius="full"
          p={3}
        />
        <Heading size="lg" textAlign="center" my={5}>
          {heading}
        </Heading>
        <Text textAlign="center">{content}</Text>
      </Box>
    </motion.div>
  );
};
