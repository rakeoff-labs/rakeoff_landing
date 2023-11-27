import React from "react";
import logowhite from "../../assets/rakeoff_logo_white.svg";
import {
  Container,
  Spacer,
  Flex,
  Image as ChakraImage,
  Button,
  Text,
  HStack,
  useBreakpointValue,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  VStack,
  Divider,
} from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  ExternalLinkIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { RakeoffPurpleHue, boxBackgroundColor, boxFontColor } from "../colors";

const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Container maxW="7xl">
      <Flex h={20} alignItems={"center"}>
        <ChakraImage alt="rakeoff logo" w="auto" h={35} src={logowhite} />
        <Spacer />
        {isDesktop ? (
          <>
            <HStack me={8} gap={8}>
              <Text
                fontSize="lg"
                as="a"
                href="https://analytics.rakeoff.io/"
                target="_blank"
                color={boxFontColor}
                _hover={{ color: "white", cursor: "pointer" }}
                fontWeight={500}
              >
                Analytics <ExternalLinkIcon mb={1} />
              </Text>
              <Text
                fontSize="lg"
                as="a"
                href="https://docs.rakeoff.io/"
                target="_blank"
                color={boxFontColor}
                _hover={{ color: "white", cursor: "pointer" }}
                fontWeight={500}
              >
                Docs <ExternalLinkIcon mb={1} />
              </Text>
              <Text
                fontSize="lg"
                as="a"
                href="https://rakeoff.medium.com/"
                target="_blank"
                color={boxFontColor}
                _hover={{ color: "white", cursor: "pointer" }}
                fontWeight={500}
              >
                Blog <ExternalLinkIcon mb={1} />
              </Text>
              <Text
                fontSize="lg"
                as="a"
                href="https://docs.rakeoff.io/welcome/frequently-asked-questions"
                target="_blank"
                color={boxFontColor}
                _hover={{ color: "white", cursor: "pointer" }}
                fontWeight={500}
              >
                FAQ <ExternalLinkIcon mb={1} />
              </Text>
            </HStack>
            <Button
              rightIcon={<ArrowForwardIcon />}
              as="a"
              href="https://app.rakeoff.io/"
              target="_blank"
              bg={boxBackgroundColor}
              _hover={{
                boxShadow: `0px 0px 10px 6px ${RakeoffPurpleHue}`,
              }}
              boxShadow={`0px 0px 10px 3px ${RakeoffPurpleHue}`}
              color="white"
            >
              Launch dApp
            </Button>
          </>
        ) : null}
        {!isDesktop ? <MobileMenu /> : null}
      </Flex>
    </Container>
  );
};

export default Navbar;

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        icon={<HamburgerIcon />}
        aria-label="Open menu"
        onClick={onOpen}
        bg={boxBackgroundColor}
        _hover={{
          boxShadow: `0px 0px 10px 6px ${RakeoffPurpleHue}`,
        }}
        boxShadow={`0px 0px 10px 3px ${RakeoffPurpleHue}`}
        color="white"
      />
      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <VStack onClick={onClose} gap={8} align="start">
              <Text
                fontSize={28}
                as="a"
                href="https://analytics.rakeoff.io/"
                target="_blank"
                color={boxFontColor}
                fontWeight={500}
              >
                Analytics <ExternalLinkIcon mb={1} />
              </Text>
              <Divider />
              <Text
                fontSize={28}
                as="a"
                href="https://docs.rakeoff.io/"
                target="_blank"
                color={boxFontColor}
                fontWeight={500}
              >
                Docs <ExternalLinkIcon mb={1} />
              </Text>
              <Divider />
              <Text
                fontSize={28}
                as="a"
                href="https://rakeoff.medium.com/"
                target="_blank"
                color={boxFontColor}
                fontWeight={500}
              >
                Blog <ExternalLinkIcon mb={1} />
              </Text>
              <Divider />
              <Text
                fontSize={28}
                as="a"
                href="https://docs.rakeoff.io/welcome/frequently-asked-questions"
                target="_blank"
                color={boxFontColor}
                fontWeight={500}
              >
                FAQ <ExternalLinkIcon mb={1} />
              </Text>
              <Divider />
              <Button
                rightIcon={<ArrowForwardIcon />}
                as="a"
                href="https://app.rakeoff.io/"
                target="_blank"
                size="lg"
                bg={boxBackgroundColor}
                _hover={{
                  boxShadow: `0px 0px 10px 6px ${RakeoffPurpleHue}`,
                }}
                boxShadow={`0px 0px 10px 3px ${RakeoffPurpleHue}`}
                color="white"
                w="100%"
              >
                Launch dApp
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
