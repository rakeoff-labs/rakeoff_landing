import React from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Blob = (props) => {
  return (
    <Icon
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default function Mission() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={400}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",

                left: 0,
                bgGradient:
                  "linear(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)",
                zIndex: -1,
              }}
              sx={{
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundImage:
                  "linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)",
              }}
            >
              Our Mission
            </Text>

            <br />
            <Text as={"span"} color={"red.400"}>
              The First ICP Prize pool
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            You have the opportunity to increase your earnings, while still
            retaining your initial stake. Your rewards are pooled together with
            those of other participants, offering a chance to win a sizable
            payout of 256 ICP, instead of the standard 1 ICP monthly reward. The
            only stake is your reward – your original stake is always safe. We
            provide this innovative system to give you the potential for higher
            returns, and a more exciting way to engage with the ICP network.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              leftIcon={<ArrowForwardIcon />}
            >
              How It Works
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Blob
            w={["300px", "300px", "300px", "440px"]}
            h={["250px", "250px", "250px", "400px"]}
            position={"absolute"}
            top={-5}
            right={-5}
            zIndex={-1}
            color={useColorModeValue("red.50", "red.400")}
          />
          <Blob
            w={["150px", "150px", "150px", "200px"]}
            h={["150px", "150px", "150px", "200px"]}
            position={"absolute"}
            top={5}
            left={-10}
            zIndex={-1}
            color={useColorModeValue("red.100", "red.500")}
          />
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <IconButton
              aria-label={"Play Button"}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              icon={<ArrowForwardIcon />}
              size={"lg"}
              color={"white"}
              position={"absolute"}
              left={"50%"}
              top={"50%"}
              transform={"translateX(-50%) translateY(-50%)"}
            />
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://cdn.pixabay.com/photo/2018/08/22/12/43/woman-3621509_960_720.jpg"
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
