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

import { PhoneIcon, ChevronDownIcon } from '@chakra-ui/icons'

const FAQ = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
    onToggle();
  };

  return (
    <Container maxW="container.lg" py={8}>
      <Center>
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
          <Box onClick={() => handleItemClick(0)} position="relative" width="100%" marginLeft={["0", "-20px", "-50px"]}>
            <Icon as={PhoneIcon} boxSize={6} color="#A5B4C4" mb={4} />
            <Heading
              as="h6"
              size="md"
              color="#A5B4C4"
              bgGradient="linear(to-r, red.400, red.600)"
              bgClip="text"
              mb={10} // Increase the gap between question headings
              fontSize="2xl" // Increase the font size
              marginBlockEnd="2.5rem" // Add more margin space
            >
              Can I lose my money?
              <Icon
                as={ChevronDownIcon}
                boxSize={4}
                color="gray.400"
                ml={1}
              />
            </Heading>
            <Collapse in={activeItem === 0}>
              <Text color="white" fontSize="lg" marginBlockEnd="1rem"> {/* Increase the font size and margin space */}
                <strong>Absolutely!</strong> We work with top payment companies
                which guarantees your safety and security. All billing information
                is stored on our payment processing partner.
              </Text>
            </Collapse>
          </Box>
        </GridItem>
        <GridItem>
          <Box onClick={() => handleItemClick(1)} position="relative" width="100%">
            <Icon as={PhoneIcon} boxSize={6} color="#A5B4C4" mb={4} />
            <Heading
              as="h6"
              size="md"
              color="white"
              bgGradient="linear(to-r, red.400, red.600)"
              bgClip="text"
              mb={60} // Increase the gap between question headings
              fontSize="2xl" // Increase the font size
              marginBlockEnd="2.5rem" // Add more margin space
            >
              Where does the prize money come from?
              <Icon
                as={ChevronDownIcon}
                boxSize={4}
                color="gray.400"
                ml={1}
              />
            </Heading>
            <Collapse in={activeItem === 1}>
              <Text color="white" fontSize="xl" marginBlockEnd="1rem"> {/* Increase the font size and margin space */}
                <strong>Yes, it is possible!</strong> You can cancel your
                subscription anytime in your account. Once the subscription is
                cancelled, you will not be charged next month.
              </Text>
            </Collapse>
          </Box>
        </GridItem>
        <GridItem>
        <Box onClick={() => handleItemClick(0)} position="relative" width="100%" marginRight={["0", "-20px", "-50px"]}>
            <Icon as={PhoneIcon} boxSize={6} color="#A5B4C4" mb={4} />
            <Heading
              as="h6"
              size="md"
              color="white"
              bgGradient="linear(to-r, red.400, red.600)"
              bgClip="text"
              mb={60} // Increase the gap between question headings
              fontSize="2xl" // Increase the font size
              marginBlockEnd="2.5rem" // Add more margin space
            >
              How are winners chosen? How many?
              <Icon
                as={ChevronDownIcon}
                boxSize={4}
                color="gray.400"
                ml={1}
              />
            </Heading>
            <Collapse in={activeItem === 2}>
              <Text color="white" fontSize="xl" marginBlockEnd="1rem"> {/* Increase the font size and margin space */}
                Currently, we only offer monthly subscription. You can upgrade or
                cancel your monthly account at any time with no further
                obligation.
              </Text>
            </Collapse>
          </Box>
        </GridItem>
        {/* Repeat the GridItem block for other questions */}
      </Grid>
    </Container>
  );
};

export default FAQ;
