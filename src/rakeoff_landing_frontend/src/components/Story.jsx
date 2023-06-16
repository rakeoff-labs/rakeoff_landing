import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Card,
  Image,
  Text,
  Center,
  VStack,
} from "@chakra-ui/react";
import reward2 from "../assets/reward2.png";
import btc1 from "../assets/btc1.png";
import coolsafe from "../assets/coolsafe.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Social = () => {
  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Box py={["4", "8", "12"]}>
       <Center mb={5}>
    <Heading
      bgGradient="linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)"
      bgClip="text"
      size="xl"
    >More on Rakeoff</Heading>
      </Center>

      <Center>
        <SimpleGrid columns={[1, 2, 3]} spacing="178px" mx="auto">
          <Card
            p={8}
            boxShadow="lg"
            bg={"#1e1f23"}
            border={"1px solid #a5a6a7"}
            borderRadius="3xl"
            color="white"
            textAlign="left"
            height="320px"
            width="300px"
            transition="transform 0.3s"
            _hover={{ transform: "translateY(-5px)" }}
            onClick={() =>
              handleCardClick(
                "https://rakeoff.notion.site/What-is-ICP-Staking-2f4a04d9723a47a882dbed2eaf22ec39"
              )
            }
            cursor="pointer"
            mb={1}
            position="relative"
          >
            <ArrowForwardIcon
              position="absolute"
              top={3}
              right={3}
              color="white"
              transform="rotate(-45deg)"
            />

            <Image
              src={coolsafe}
              alt="Convert BTC at low fees"
              borderRadius="lg"
              position="absolute"
              top={4}
              left={6}
              maxW="110px"
              maxH="110px"
            />

            <VStack
              alignItems="start"
              position="absolute"
              top={"150px"}
              left={6}
              spacing={2}
            >
              <Heading size="lg">What is ICP Staking?</Heading>
              <Text fontSize="md">Read here for more</Text>
            </VStack>
          </Card>

          <Card
            p={8}
            boxShadow="lg"
            bg={"#1e1f23"}
            border={"1px solid #a5a6a7"}
            borderRadius="3xl"
            color="white"
            textAlign="left"
            height="320px"
            width="300px"
            transition="transform 0.3s"
            _hover={{ transform: "translateY(-5px)" }}
            onClick={() =>
              handleCardClick(
                "https://rakeoff.notion.site/How-do-I-earn-Rewards-fcc4ddf33ede49fe970b0def73770419?pvs=4"
              )
            }
            cursor="pointer"
            mb={1}
            position="relative"
          >
            <ArrowForwardIcon
              position="absolute"
              top={3}
              right={3}
              color="white"
              transform="rotate(-45deg)"
            />

            <Image
              src={reward2}
              alt="Convert BTC at low fees"
              borderRadius="lg"
              position="absolute"
              top={4}
              left={6}
              maxW="110px"
              maxH="110px"
            />

            <VStack
              alignItems="start"
              position="absolute"
              top={"150px"}
              left={6}
              spacing={2}
            >
              <Heading size="lg">How do I earn Rewards?</Heading>
              <Text fontSize="md">Read here for more</Text>
            </VStack>
          </Card>
          <Card
            p={8}
            boxShadow="lg"
            bg={"#1e1f23"}
            border={"1px solid #a5a6a7"}
            borderRadius="3xl"
            textAlign="left"
            color="white"
            height="320px"
            width="300px"
            transition="transform 0.3s"
            _hover={{ transform: "translateY(-5px)" }}
            onClick={() =>
              handleCardClick(
                "https://rakeoff.notion.site/Bitcoin-to-ICP-Conversion-c1c99cb154264804a1e5b86d12372255?pvs=4"
              )
            }
            cursor="pointer"
            mb={1}
            position="relative"
          >
            <ArrowForwardIcon
              position="absolute"
              top={3}
              right={3}
              color="white"
              transform="rotate(-45deg)"
            />

            <Image
              src={btc1}
              alt="Convert BTC at low fees"
              borderRadius="lg"
              position="absolute"
              top={4}
              left={6}
              maxW="110px"
              maxH="110px"
            />

            <VStack
              alignItems="start"
              position="absolute"
              top={"150px"}
              left={6}
              spacing={2}
            >
              <Heading size="lg">ckBTC Integration Explained</Heading>
              <Text fontSize="md">Read here for more</Text>
            </VStack>
          </Card>
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default Social;
