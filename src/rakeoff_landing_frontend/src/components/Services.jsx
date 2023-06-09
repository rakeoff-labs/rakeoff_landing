import React from "react";
import { Box, Heading, SimpleGrid, Card, Image, Text, Center } from "@chakra-ui/react";
import icp from "../assets/icp.png";
import fix1 from "../assets/fix1.png";
import icpbit from "../assets/icpbit.png";

const Services = () => {
  return (
    <Box as="section" py={["4", "8", "12"]} textAlign="center">
      <Heading
        as="h3"
        size="xl"
        fontWeight="800"
        fontSize={["40px", "40px", "48px"]}
        lineHeight={["44px", "48px", "56px"]}
        width="max-content"
        maxW="100%"
        bgGradient="linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)"
        bgClip="text"
        color="transparent"
        marginBottom="16px"
        padding="0"
        mx="auto"
        textAlign="center"
      >
        Services
      </Heading>

      <Center>
        <SimpleGrid columns={[1, 2, 3]} spacing={8} mx="auto">
          <Card
            p={8}
            borderRadius="md"
            boxShadow="md"
            bg="rgb(18,28,35)"
            color="white"
            textAlign="center"
            height="460px"
            width="350px"
            transition="transform 0.3s"
            _hover={{ transform: "translateY(-5px)" }}
          >
            <Image src={icp} alt="Earn ICP Rewards" fit="contain" maxHeight="200px" mx="auto" my={4} />
            <Heading size="lg" mb={4}>
              Earn ICP Rewards
            </Heading>
            <Text>Pooled investments together to earn some ICP!</Text>
          </Card>
          <Card
            p={8}
            borderRadius="md"
            boxShadow="md"
            bg="rgb(18,28,35)"
            color="white"
            textAlign="center"
            height="460px"
            width="350px"
            transition="transform 0.3s"
            _hover={{ transform: "translateY(-5px)" }}
          >
            <Image src={fix1} alt="100% No loss" fit="contain" maxHeight="200px" mx="auto" my={4} />
            <Heading size="lg" mb={4}>
              100% No loss
            </Heading>
            <Text>A completely secure and safe service to invest your money</Text>
          </Card>
          <Card
            p={8}
            borderRadius="md"
            boxShadow="md"
            bg="rgb(18,28,35)"
            color="white"
            textAlign="center"
            height="460px"
            width="350px"
            transition="transform 0.3s"
            _hover={{ transform: "translateY(-5px)" }}
          >
            <Image src={icpbit} alt="Convert BTC at low fees" fit="contain" maxHeight="200px" mx="auto" my={4} />
            <Heading size="lg" mb={4}>
              Convert BTC at low fees
            </Heading>
            <Text>Exchange your ICP money into BTC for a low rate of 3%</Text>
          </Card>
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default Services;
