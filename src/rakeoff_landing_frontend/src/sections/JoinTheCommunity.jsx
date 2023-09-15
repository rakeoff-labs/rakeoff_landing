import React from "react";
import {
  Heading,
  SimpleGrid,
  Image,
  Text,
  Container,
  Flex,
  Center,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { boxFontColor } from "../colors";
import githubwhite from "../../assets/github_white.png";
import twitterwhite from "../../assets/twitter_white.png";
import discordwhite from "../../assets/discord_white.png";
import mediumwhite from "../../assets/medium_white.png";

const JoinTheCommunity = () => {
  return (
    <Container maxW={"7xl"} mt={{ base: 12, md: "5rem" }} p={0} centerContent>
      <Center mb={5}>
        <Heading
          bgGradient="linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)"
          bgClip="text"
          size="xl"
        >
          Join our community
        </Heading>
      </Center>
      <SimpleGrid columns={[2, null, 4]} gap={8} w={["80%", null, "60%"]} align="center">
        <SocialLink
          imageSrc={twitterwhite}
          title={"X (Twitter)"}
          description={"Keep up to date on X."}
          link={"https://twitter.com/rakeoff_app"}
        />
        <SocialLink
          imageSrc={discordwhite}
          title={"Discord"}
          description={"Chat to the devs."}
          link={"https://discord.gg/5jRHUYnsrM"}
        />
        <SocialLink
          imageSrc={mediumwhite}
          title={"Medium"}
          description={"Browse our blog content."}
          link={"https://medium.com/@crew_7288"}
        />
        <SocialLink
          imageSrc={githubwhite}
          title={"GitHub"}
          description={"Check out our code."}
          link={"https://github.com/rakeoff-labs"}
        />
      </SimpleGrid>
    </Container>
  );
};

export default JoinTheCommunity;

const SocialLink = ({ imageSrc, title, link }) => {
  return (
    <Flex align="center" justify="center">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Flex
          p={5}
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
          <Image src={imageSrc} alt={title} h={"40px"} w={"100%"} />
        </Flex>
        <Text textAlign="center" noOfLines={1} color={boxFontColor} mt={3}>
          {title} <ExternalLinkIcon mb={1} />
        </Text>
      </a>
    </Flex>
  );
};
