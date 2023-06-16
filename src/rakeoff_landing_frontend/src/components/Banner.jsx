import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Heading,
  Center,
  Image,
  Stack,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Rakoff_logo_white from "../assets/Rakoff_logo_white.png";
import astronot from "../assets/astronot.webp";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150 - Math.random() * 50);
  const toRotate = [
    "Staking ICP Rewards",
    "No-Loss Prize Pool",
    "ckBTC Integration",
  ];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 2)
      : fullText.substring(0, text.length + 2);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(500);
    }
  };
  return (
    <Flex className="banner" justify="center" align="center" height="90vh">
      <Box position="relative">
        <Flex justify="center" align="center">
          <TrackVisibility>
            {({ isVisible }) => (
              <Box
                className={isVisible ? "animate__animated animate__zoomIn" : ""}
              >
                <Image
                  src={Rakoff_logo_white}
                  h={[170, null, 220]}
                  alt="Rakeoff logo"
                />
              </Box>
            )}
          </TrackVisibility>
        </Flex>
        <Image
          src={astronot}
          alt="Astronaut"
          height={[100, null, 150]}
          position="absolute"
          top={["-5rem", null, "-8rem"]}
          right={["2rem", null, "8rem"]}
        />
        <Center h={"50px"}>
          <Heading
            bgGradient="linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)"
            bgClip="text"
            size="xl"
          >
            {text}
          </Heading>
        </Center>
        <Text textAlign="center" maxW="2xl" color="white" mt={5}>
          Rakeoff is a cryptocurrency staking rewards platform built on the
          Internet Computer Protocol (ICP) blockchain.
        </Text>

        <Stack
          direction={{ base: "column", md: "row" }}
          justify="center"
          align="center"
          mt={8}
          gap={3}
        >
          {/* <Box>
            <Button
              as="a"
              href="https://app.rakeoff.io/"
              target="_blank"
              colorScheme="red"
              rightIcon={<ArrowForwardIcon color="#ffffff" />}
              isDisabled
            >
              Launching soon
            </Button>
          </Box> */}
          <Box>
            <Button
              variant="outline"
              as="a"
              href="https://rakeoff.notion.site/Revolutionising-ICP-Crypto-Staking-029a131e8a2b4b8eb1dbba6ad857980d?pvs=4"
              target="_blank"
              rightIcon={<ExternalLinkIcon />}
            >
              About Rakeoff
            </Button>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Banner;
