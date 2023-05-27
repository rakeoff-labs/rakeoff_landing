import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import rakeoff from "../assets/rakeoff.svg";
import { Box, Button as ChakraButton, Flex } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import React from "react";


export const Banner = () => {
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
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={rakeoff} alt="ICP" />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
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
                  <h3>Rakeoff is a cryptocurrency staking rewards platform built on the Internet computer protocol blockchain</h3>
                  <Flex justify="center" mt={8}>
                    <ChakraButton
                      as="a"
                      href="https://app.rakeoff.io/"
                      colorScheme="red"
                      size="lg"
                      rightIcon={<FaArrowRight color="#ffffff" />}
                      bgGradient="linear(to-r, #FF0000, #000000)"
                      _hover={{ bgGradient: "none", bg: "#000000" }}
                      mr={4}
                    >
                      Launch dApp
                    </ChakraButton>
                    <ChakraButton
                      as="a"
                      href="#about"
                      colorScheme="gray"
                      size="lg"
                      bgGradient="linear(to-r, #ffffff, #808080)"
                      _hover={{ bgGradient: "none", bg: "#808080" }}
                    >
                      About Rakeoff
                    </ChakraButton>
                  </Flex>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
