
import React from "react";
import { NavLink } from "react-router-dom";
import logowhite from "../assets/logowhite.png";
import githubwhite from "../assets/githubwhite.png";
import twitterwhite from "../assets/twitterwhite.png";
import {
  useBreakpointValue,
  Box,
  Spacer,
  Flex,
  HStack,
  IconButton,
  Image as ChakraImage,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaArrowRight } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";

const LinkItems = [
  { name: "About", link: "/stories" },
  { name: "Statistics", link: "/marketplace" },
  { name: "Services", link: "/mint" },
  { name: "FAQ", link: "/mint" },
];

const NavItem = ({ link, name }) => {
  return (
    <NavLink to={link} exact>
      <Box
        borderBottom="3px solid"
        borderColor="transparent"
        pb={0.5}
        sx={{
          backgroundImage:
            "linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        <Flex
          align="center"
          py="2"
          px="3"
          m="1"
          borderRadius="md"
          role="group"
          cursor="pointer"
          fontWeight={600}
        >
          {name}
        </Flex>
      </Box>
    </NavLink>
  );
};

const CustomNavbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box h="4rem">
      <Box
        as="section"
        pt="0.6rem"
        pb={"0.4rem"}
        px={isDesktop ? "4rem" : "1rem"}
        boxShadow="2xl"
        position="fixed"
        width="100%"
        top="0"
        zIndex="2"
        bg={"#111111"}
        borderBottom={isDesktop ? "5px double" : "4px double"}
        borderColor="#1a1a1a"
      >
        {isDesktop ? (
          <Flex align="center">
            <NavLink to={"/"}>
              <Flex align="center" me={5}>
                <ChakraImage h={50} src={logowhite} />
              </Flex>
            </NavLink>
            <HStack fontWeight={700} fontSize={21}>
              {LinkItems.map((link) => (
                <NavItem key={link.name} name={link.name} link={link.link} />
              ))}
            </HStack>
            <Spacer />
            <HStack spacing={3}>
              <Icon as={ChakraImage} boxSize={9} src={githubwhite} />
              <Icon as={ChakraImage} boxSize={9} src={twitterwhite} />
              <ChakraButton
                as="a"
                href="https://app.rakeoff.io/"
                colorScheme="red"
                size="lg"
                rightIcon={<FaArrowRight color="#ffffff" />}
                bgGradient="linear(to-r, #FF0000, #000000)"
                _hover={{ bgGradient: "none", bg: "#000000" }}
                mr={3}
              >
                Launch dApp
              </ChakraButton>
            </HStack>
          </Flex>
        ) : (
          <Flex align="center">
            <NavLink to={"/"}>
              <Flex align="center" me={5}>
                <ChakraImage h={40} src={logowhite} />
              </Flex>
            </NavLink>
            <Spacer />
            <MobileMenu />
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default CustomNavbar;

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton ms={2} icon={<HamburgerIcon />} onClick={onOpen} />
      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={"#111111"} borderColor="#1a1a1a">
          <DrawerCloseButton color="white" />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <VStack fontWeight={700} fontSize={28} onClick={() => onClose()}>
              {LinkItems.map((link) => (
                <NavItem key={link.name} name={link.name} link={link.link} />
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
