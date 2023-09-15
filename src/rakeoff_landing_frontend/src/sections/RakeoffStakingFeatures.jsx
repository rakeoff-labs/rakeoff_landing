import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Image,
  Text,
  Heading,
  Container,
  SimpleGrid,
  Button,
  VStack,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import simplified from "../../assets/simplified.svg";
import chart_up from "../../assets/chart_up.svg";
import trophy from "../../assets/trophy.svg";
import globe from "../../assets/globe.svg";
import {
  boxBackgroundColor,
  boxBorderColor,
  boxFontColor,
  mainBackgroundColor,
} from "../colors";

const RakeoffStakingFeatures = () => {
  return (
    <Container maxW="7xl" mt={{ base: 6, md: "5rem" }} p={0}>
      <SimpleGrid
        columns={[1, 1, 2]}
        mx={{ base: 3, md: 3, lg: 0 }}
        bg={`linear-gradient(to top, ${boxBackgroundColor} 30%, ${mainBackgroundColor} 100%)`}
        borderBottom={boxBorderColor}
        borderRadius="3xl"
        py={12}
        px={8}
      >
        <Flex position="relative" align="start">
          <VStack align="start" mb={8} gap={0}>
            <Heading
              bgGradient="linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)"
              bgClip="text"
              size={"xl"}
              mb={6}
              maxW="sm"
            >
              The benefits of Staking on Rakeoff
            </Heading>

            <Button
              rightIcon={<ArrowForwardIcon />}
              as="a"
              href="https://app.rakeoff.io/"
              target="_blank"
              bg={boxBackgroundColor}
              _hover={{
                boxShadow: "0px 0px 10px 6px red",
              }}
              boxShadow="0px 0px 10px 3px red"
              color="white"
            >
              Launch dApp
            </Button>
          </VStack>
        </Flex>
        <Accordion defaultIndex={[0]} allowMultiple width="100%" rounded="lg">
          <StakingFeature
            image={simplified}
            heading={"Simplified staking"}
            description={"todo"}
            isTop
          />
          <StakingFeature
            image={trophy}
            heading={"No-loss prize pool"}
            description={"todo"}
          />
          <StakingFeature
            image={globe}
            heading={"ckBTC integration"}
            description={"todo"}
          />
          <StakingFeature
            image={chart_up}
            heading={"Staked ICP bonuses"}
            description={"todo"}
            isBottom
          />
        </Accordion>
      </SimpleGrid>
    </Container>
  );
};
export default RakeoffStakingFeatures;

const StakingFeature = ({ image, heading, description, isTop, isBottom }) => {
  return (
    <AccordionItem
      borderTop={isTop ? "none" : "auto"}
      borderBottom={isBottom ? "none" : "auto"}
    >
      <AccordionButton display="flex" justifyContent="space-between" p={4}>
        <Flex
          p={3}
          bgGradient="linear(to-br, #6528c8, #a25fc2)"
          borderRadius="lg"
          h={"80px"}
          w={"85px"}
          align="center"
          justify="center"
          transition="all 0.3s ease-in-out"
          _hover={{
            transform: "scale(1.1)",
          }}
        >
          <Image src={image} alt={heading} h={"100%"} w={"100%"} />
        </Flex>
        <Heading size={{ base: "lg", md: "lg", lg: "lg" }}>{heading}</Heading>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Text color={boxFontColor}>{description}</Text>
      </AccordionPanel>
    </AccordionItem>
  );
};
