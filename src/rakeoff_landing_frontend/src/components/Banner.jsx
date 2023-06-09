import React, { useState, useEffect } from "react";
import { Container, Box, Flex, Text, Button, Center, Image } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import "animate.css";
import TrackVisibility from "react-on-screen";
import Rakoff_logo_white from "../assets/Rakoff_logo_white.png";
import background from "../assets/Rakoff_logo_white.png";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Rewards", "No-Loss", "ICP First"];
  const period = 2000;

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
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Center>
        <Container marginTop="-2rem">
          <Flex justify="center" align="center" py={4}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <Image src={Rakoff_logo_white} alt="ICP" />
                </div>
              )}
            </TrackVisibility>
          </Flex>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <Box
                  as="h1"
                  fontSize="2xl"
                  fontWeight="bold"
                  textAlign="center"
                  margin="2rem"
                  bgGradient="linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)"
                  bgClip="text"
                >
                  <span className="txt-rotate" dataPeriod="1000" data-rotate='["Rewards", "No-Loss", "ICP First"]'>
                    <span className="wrap">{text}</span>
                  </span>
                </Box>
                <Box
  as="div"
  textAlign="center"
  marginBottom={4}
  fontSize="2xl"
  className="white-text"
  color="white"
>
  Rakeoff is a cryptocurrency staking rewards platform built on the Internet Computer Protocol blockchain
</Box>


                <Flex justify="center" mt={8}>
                  <Button
                    as="a"
                    href="https://app.rakeoff.io/"
                    colorScheme="red"
                    size="lg"
                    rightIcon={<ArrowForwardIcon color="#ffffff" />}
                    bgGradient="linear(to-r, #FF0000, #000000)"
                    _hover={{ bgGradient: "none", bg: "#000000" }}
                    mr={4}
                  >
                    Launch dApp
                  </Button>
                  <Button
                    as="a"
                    href="#about"
                    colorScheme="gray"
                    size="lg"
                    bgGradient="linear(to-r, #ffffff, #808080)"
                    _hover={{ bgGradient: "none", bg: "#808080" }}
                  >
                    About Rakeoff
                  </Button>
                </Flex>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </Center>
    </section>
  );
};

export default Banner;
