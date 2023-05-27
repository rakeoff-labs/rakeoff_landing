import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Icon,
} from "@chakra-ui/react";
import { FaPaperPlane, FaPenAlt, FaUser, FaRocket, FaHome, FaBookOpen } from "react-icons/fa";

const FAQ = () => {
  return (
    <Container maxW="container.lg" py={8}>
       <Box textAlign="center" mb={4}>
        <Heading
          as="h3"
          size="xl"
          fontWeight="800"
          fontSize="56px"
          lineHeight="56px"
          width="max-content"
          maxW="100%"
          bgGradient="linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)"
          bgClip="text"
          color="transparent"
          marginBottom="16px"
          padding="0"
          textAlign="center"
        >
          FAQ
        </Heading>
        <Text color="gray.500" fontSize="lg">
          Find the answers for the most frequently asked questions below
        </Text>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem>
          <Box>
            <Icon as={FaPaperPlane} boxSize={6} color="#A5B4C4" mb={2} />
            <Heading
              as="h6"
              size="md"
              color="#A5B4C4"
              bgGradient="linear(to-r, red.400, red.600)"
              bgClip="text"
              mb={2}
            >
              A simple question?
            </Heading>
            <Text color="white">
              <strong>Absolutely!</strong> We work with top payment companies
              which guarantees your safety and security. All billing information
              is stored on our payment processing partner.
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Icon as={FaPenAlt} boxSize={6} color="#A5B4C4" mb={2} />
            <Heading
              as="h6"
              size="md"
              color="white"
              bgGradient="linear(to-r, red.400, red.600)"
              bgClip="text"
              mb={2}
            >
              A question that is longer than the previous one?
            </Heading>
            <Text color="white">
              <strong>Yes, it is possible!</strong> You can cancel your
              subscription anytime in your account. Once the subscription is
              cancelled, you will not be charged next month.
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Icon as={FaUser} boxSize={6} color="#A5B4C4" mb={2} />
            <Heading
              as="h6"
              size="md"
              color="white"
              bgGradient="linear(to-r, red.400, red.600)"
              bgClip="text"
              mb={2}
            >
              A simple question?
            </Heading>
            <Text color="white">
              Currently, we only offer monthly subscription. You can upgrade or
              cancel your monthly account at any time with no further
              obligation.
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Icon as={FaRocket} boxSize={6} color="#A5B4C4" mb={2} />
            <Heading
              as="h6"
              size="md"
              color="white"
              bgGradient="linear(to-r, red.400, red.600)"
              bgClip="text"
              mb={2}
            >
              A simple question?
            </Heading>
            <Text color="white">
              Yes. Go to the billing section of your dashboard and update your
              payment information.
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Icon as={FaHome} boxSize={6} color="#A5B4C4" mb={2} />
            <Heading
              as="h6"
              size="md"
              color="white"
              bgGradient="linear(to-r, red.400, red.600)"
              bgClip="text"
              mb={2}
            >
              A simple question?
            </Heading>
            <Text color="white">
              <strong>Unfortunately no</strong>. We do not issue full or partial
              refunds for any reason.
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Icon as={FaBookOpen} boxSize={6} color="#A5B4C4" mb={2} />
            <Heading
              as="h6"
              size="md"
              color="white"
              bgGradient="linear(to-r, red.400, red.600)"
              bgClip="text"
              mb={2}
            >
              Another question that is longer than usual
            </Heading>
            <Text color="white">
              Of course! We’re happy to offer a free plan to anyone who wants
              to try our service.
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default FAQ;

