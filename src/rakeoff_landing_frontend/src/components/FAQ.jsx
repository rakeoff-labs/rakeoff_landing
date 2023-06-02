import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Icon,
  Collapse,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import {
  FaPaperPlane,
  FaPenAlt,
  FaUser,
  FaRocket,
  FaHome,
  FaBookOpen,
  FaAngleDown,
} from "react-icons/fa";

const FAQ = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
    onToggle();
  };

  return (
    <Container maxW="container.lg" py={8}>
      <Center> {/* Wrap the content in a Center component */}
        <Box textAlign="center" mb={4}>
          <Heading
            as="h3"
            size="xl"
            fontWeight="800"
            fontSize={["40px", "40px", "48px"]}
            lineHeight={["44px", "48px", "56px"]}
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
        </Box>
      </Center>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem>
          <Box onClick={() => handleItemClick(0)} position="relative">
            <Icon as={FaPaperPlane} boxSize={6} color="#A5B4C4" mb={2} />
            <Heading
              as="h6"
              size="md"
              color="#A5B4C4"
              bgGradient="linear(to-r, red.400, red.600)"
              bgClip="text"
              mb={2}
            >
              Can I lose my money?
              <Icon
                as={FaAngleDown}
                boxSize={4}
                color="gray.400"
                ml={1}
              />
            </Heading>
            <Collapse in={activeItem === 0}>
              <Text color="white">
                <strong>Absolutely!</strong> We work with top payment companies
                which guarantees your safety and security. All billing information
                is stored on our payment processing partner.
              </Text>
            </Collapse>
          </Box>
        </GridItem>
        <GridItem>
          <Box onClick={() => handleItemClick(1)} position="relative">
            <Icon as={FaPenAlt} boxSize={6} color="#A5B4C4" mb={2} />
            <Heading
              as="h6"
              size="md"
              color="white"
              bgGradient="linear(to-r, red.400, red.600)"
              bgClip="text"
              mb={2}
            >
              Where does the prize money come from?
              <Icon
                as={FaAngleDown}
                boxSize={4}
                color="gray.400"
                ml={1}
              />
            </Heading>
            <Collapse in={activeItem === 1}>
              <Text color="white">
                <strong>Yes, it is possible!</strong> You can cancel your
                subscription anytime in your account. Once the subscription is
                cancelled, you will not be charged next month.
              </Text>
            </Collapse>
          </Box>
        </GridItem>
        <GridItem>
          <Box onClick={() => handleItemClick(2)} position="relative">
            <Icon as={FaUser} boxSize={6} color="#A5B4C4" mb={2} />
            <Heading
              as="h6"
              size="md"
              color="white"
              bgGradient="linear(to-r, red.400, red.600)"
              bgClip="text"
              mb={2}
            >
              How are winners chosen? How many?
              <Icon
                as={FaAngleDown}
                boxSize={4}
                color="gray.400"
                ml={1}
              />
            </Heading>
            <Collapse in={activeItem === 2}>
              <Text color="white">
                Currently, we only offer monthly subscription. You can upgrade or
                cancel your monthly account at any time with no further
                obligation.
              </Text>
            </Collapse>
          </Box>
        </GridItem>
        <GridItem>
          <Box onClick={() => handleItemClick(3)} position="relative">
            <Icon as={FaRocket} boxSize={6} color="#A5B4C4" mb={2} />
            <Heading
              as="h6"
              size="md"
              color="white"
              bgGradient="linear(to-r, red.400, red.600)"
              bgClip="text"
              mb={2}
            >
              Can I see the winners?
              <Icon
                as={FaAngleDown}
                boxSize={4}
                color="gray.400"
                ml={1}
              />
            </Heading>
            <Collapse in={activeItem === 3}>
              <Text color="white">
                Yes. Go to the billing section of your dashboard and update your
                payment information.
              </Text>
            </Collapse>
          </Box>
        </GridItem>
        <GridItem>
          <Box onClick={() => handleItemClick(4)} position="relative">
            <Icon as={FaHome} boxSize={6} color="#A5B4C4" mb={2} />
            <Heading
              as="h6"
              size="md"
              color="white"
              bgGradient="linear(to-r, red.400, red.600)"
              bgClip="text"
              mb={2}
            >
             Can I convert my ICP reward to BTC?
              <Icon
                as={FaAngleDown}
                boxSize={4}
                color="gray.400"
                ml={1}
              />
            </Heading>
            <Collapse in={activeItem === 4}>
              <Text color="white">
                <strong>Unfortunately no</strong>. We do not issue full or partial
                refunds for any reason.
              </Text>
            </Collapse>
          </Box>
        </GridItem>
        <GridItem>
          <Box onClick={() => handleItemClick(5)} position="relative">
            <Icon as={FaBookOpen} boxSize={6} color="#A5B4C4" mb={2} />
            <Heading
              as="h6"
              size="md"
              color="white"
              bgGradient="linear(to-r, red.400, red.600)"
              bgClip="text"
              mb={2}
            >
              How long do I have to claim my reward?
              <Icon
                as={FaAngleDown}
                boxSize={4}
                color="gray.400"
                ml={1}
              />
            </Heading>
            <Collapse in={activeItem === 5}>
              <Text color="white">
                Of course! We’re happy to offer a free plan to anyone who wants
                to try our service.
              </Text>
            </Collapse>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default FAQ;
