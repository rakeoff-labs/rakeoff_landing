import React from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  useColorModeValue,
  AspectRatio,
} from "@chakra-ui/react";

export default function PromoVideo() {
  return (
    <Container maxW={"7xl"} mt={{ base: 6, md: "5rem" }} p={0}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            bgGradient="linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)"
            bgClip="text"
            size={{ base: "xl", md: "xg", lg: "3xl" }}
            mb={5}
            p={1}
          >
            What Rakeoff
            <br /> is
          </Heading>
          <Text color={"gray.500"}>
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them, and even sync them in the cloud so
            you can use them anywhere. All that is free!
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue("red.50", "red.400")}
          />
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <AspectRatio w="100%" h={"100%"} ratio={1}>
              <iframe
                title="AI"
                src="https://www.youtube.com/embed/w5nEf-HahZM?si=0EZujd_zj-MAJzJP"
              />
            </AspectRatio>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
