import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Image,
  Text,
  Heading,
  Container,
  SimpleGrid,
  Button,
  Box,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import simplified from "../../assets/simplified.svg";
import chart_up from "../../assets/chart_up.svg";
import trophy from "../../assets/trophy.svg";
import globe from "../../assets/globe.svg";

import { boxBackgroundColor, boxFontColor } from "../colors";

import { ChevronDownIcon } from "@chakra-ui/icons";

export default function DropDown() {
  return (
    <Container maxW="7xl" mt={{ base: 6, md: "5rem" }} p={0}>
      <SimpleGrid columns={[1, 1, 2]} mx={{ base: 3, md: 3, lg: 0 }}>
        <Box position="relative" align="start">
          <Heading
            bgGradient="linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)"
            bgClip="text"
            size={{ base: "xl", md: "xg", lg: "3xl" }}
            mb={5}
            p={1}
          >
            Rakeoff staking
            <br /> features
          </Heading>

          <Button
            rightIcon={<ArrowForwardIcon />}
            as="a"
            href="https://docs.rakeoff.io/rakeoff/tutorials-and-guides"
            target="_blank"
            bg={boxBackgroundColor}
            _hover={{
              boxShadow: "0px 0px 10px 6px red",
            }}
            boxShadow="0px 0px 10px 3px red"
            color="white"
            justify="center"
            p={4}
            mb={6}
          >
            Learn more about our features
          </Button>
        </Box>
        <Accordion allowMultiple width="100%" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              justifyContent="space-between"
              p={4}
            >
              <AccordianProps
                image={simplified}
                heading={"Simplified staking"}
              />

              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color={boxFontColor}>
                A simplified and streamlined way to stake your ICP tokens and
                earn ICP staking rewards.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              justifyContent="space-between"
              p={4}
            >
              <AccordianProps image={trophy} heading={"No-loss prize pool"} />
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color={boxFontColor}>
                The option to disburse your ICP staking rewards into the no-loss
                prize pool for a chance to win big.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              justifyContent="space-between"
              p={4}
            >
              <AccordianProps image={globe} heading={"ckBTC integration"} />
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color={boxFontColor}>
                The option to disburse your ICP staking rewards directly as
                ckBTC via our in-built smart contract swap.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              justifyContent="space-between"
              p={4}
            >
              <AccordianProps image={chart_up} heading={"Staked ICP bonuses"} />
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color={boxFontColor}>
                Unlock extra ICP bonuses by achieving staking milestones with
                Rakeoff.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </SimpleGrid>
    </Container>
  );
}

const AccordianProps = ({ image, heading }) => {
  return (
    <>
      <Flex
        rounded={"md"}
        color={"white"}
        bgGradient="linear(to-t, #6528c8, #a25fc2)"
        justify="center"
        align="center"
      >
        <Image src={image} h={{ base: 110, md: 150, lg: 120 }} m={-5} mt={-5} />
      </Flex>

      <Heading size={{ base: "lg", md: "lg", lg: "lg" }}>{heading}</Heading>
    </>
  );
};
