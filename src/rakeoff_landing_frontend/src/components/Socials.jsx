import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Card,
  Image,
  Text,
  Center,
  Link,
} from "@chakra-ui/react";
import redgit from "../assets/redgit.png";
import redtwit from "../assets/redtwit.png";
import redisc from "../assets/redisc.png";

const Social = () => {
  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Box py={["4", "8", "12"]}>
      <Center mb={5}>
        <Heading>Join the Rakeoff Community</Heading>
      </Center>

      <Center>
        <SimpleGrid columns={[1, 2, 3]} spacing={8} mx="auto">
          <Card
            p={8}
            boxShadow="md"
            bg={"#1e1f23"}
            border={"1px solid #a5a6a7"}
            borderRadius="3xl"
            textAlign="center"
            height="320px"
            width="350px"
            transition="transform 0.3s"
            _hover={{ transform: "translateY(-5px)" }}
            onClick={() => handleCardClick("https://twitter.com/rakeoff_app")}
            cursor="pointer"
            mb={1}
          >
            <Center>
              <Image
                src={redtwit}
                alt="Earn ICP Rewards"
                fit="contain"
                maxW="200px"
                maxH="200px"
                mx="auto"
                my={-2}
              />
            </Center>
            <Heading size="lg" mb={1}>
              Twitter
            </Heading>
            <Text fontSize="md" mb={-2}>
              Keep up to date with our announcements @rakeoff_app
            </Text>
          </Card>
          <Card
            p={8}
            boxShadow="md"
            bg={"#1e1f23"}
            border={"1px solid #a5a6a7"}
            borderRadius="3xl"
            textAlign="center"
            height="320px"
            width="350px"
            transition="transform 0.3s"
            _hover={{ transform: "translateY(-5px)" }}
            onClick={() => handleCardClick("https://github.com/rakeoff-labs")}
            cursor="pointer"
            mb={1}
          >
            <Center>
              <Image
                src={redgit}
                alt="100% No loss"
                fit="contain"
                maxW="200px"
                maxH="200px"
                mx="auto"
                my={-2}
              />
            </Center>
            <Heading size="lg" mb={1}>
              Github
            </Heading>
            <Text fontSize="md" mb={-2}>
              Looking for some code inspiration? Check out ours
            </Text>
          </Card>
          <Card
            p={8}
            boxShadow="md"
            bg={"#1e1f23"}
            border={"1px solid #a5a6a7"}
            borderRadius="3xl"
            textAlign="center"
            height="320px"
            width="350px"
            transition="transform 0.3s"
            _hover={{ transform: "translateY(-5px)" }}
            onClick={() => handleCardClick("https://discord.gg/5jRHUYnsrM")}
            cursor="pointer"
            mb={1}
          >
            <Center>
              <Image
                src={redisc}
                alt="Convert BTC at low fees"
                fit="contain"
                maxW="200px"
                maxH="200px"
                mx="auto"
                my={-2}
              />
            </Center>
            <Heading size="lg" mb={1}>
              Discord
            </Heading>
            <Text fontSize="md" mb={-2}>
              Chat to the devs, we love to hear your opinions
            </Text>
          </Card>
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default Social;
