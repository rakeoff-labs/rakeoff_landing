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
        <Flex justify="center" align="start">
          <VStack align="start" mb={8} gap={8}>
            <Heading size={{ base: "2xl", md: "3xl" }} maxW="md">
              Unlock Rewards with Rakeoff
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
              size="lg"
            >
              Launch dApp
            </Button>
          </VStack>
        </Flex>
        <Accordion defaultIndex={[0]} allowMultiple width="100%" rounded="lg">
          <StakingFeature
            image={simplified}
            heading={"Simplified staking"}
            description={
              "Maximize your ICP governance rewards with our user-friendly staking interface. It's so simple, you can start earning with just a few clicks—no hassle, no confusion."
            }
            isTop
          />
          <StakingFeature
            image={trophy}
            heading={"No-loss prize pool"}
            description={
              "Turn your staking rewards into winning opportunities with our unique no-loss prize pool. Enjoy the thrill of potentially winning big, all while your original stake remains untouched."
            }
          />
          <StakingFeature
            image={globe}
            heading={"ckBTC integration"}
            description={
              "Diversify your crypto portfolio effortlessly. Convert your ICP staking rewards to ckBTC right within the app, thanks to our integrated smart contract-based swapping feature."
            }
          />
          <StakingFeature
            image={chart_up}
            heading={"Staked ICP bonuses"}
            description={
              "Unlock exclusive badges and supercharge your earnings. Stake ICP on Rakeoff and climb the achievement tiers to automatically earn bonus ICP—added directly to your stake."
            }
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
      <AccordionButton
        display="flex"
        justifyContent="space-between"
        mx={0}
        px={0}
        py={6}
      >
        <Flex
          p={3}
          bgGradient="linear(to-br, #6528c8, #a25fc2)"
          borderRadius="lg"
          h={"80px"}
          w={"85px"}
          align="center"
          justify="center"
        >
          <Image src={image} alt={heading} h={"100%"} w={"100%"} />
        </Flex>
        <Heading size={"lg"}>{heading}</Heading>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Text color={boxFontColor}>{description}</Text>
      </AccordionPanel>
    </AccordionItem>
  );
};
