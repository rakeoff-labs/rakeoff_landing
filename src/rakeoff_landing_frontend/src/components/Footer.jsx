import React from 'react';
import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
  Image as ChakraImage,
  SimpleGrid,
} from '@chakra-ui/react';
import sign from "../assets/sign.png";
import stake from "../assets/stake.png";
import reward from "../assets/reward.png";
import { ReactNode } from 'react';
import logowhite from '../assets/logowhite.png';
import githubwhite from "../assets/githubwhite.png";
import twitterwhite from "../assets/twitterwhite.png";
import discord from "../assets/discord.png";
import { Icon } from "@chakra-ui/react";
import NewsletterSubscribe from './NewsletterSubscribe';


const Logo = (props) => {
  return (
    <Box {...props}>
      <Image src={logowhite} alt="Logo" height={32} />
    </Box>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('gray.700', 'gray.200')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('gray.600', 'gray.300'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box
      bg={'#111111'}
      color={useColorModeValue('gray.200', 'gray.700')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
           <NewsletterSubscribe />
        <Logo />
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Blog</Link>
          <Link href={'#'}>Contact</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2023 Rakeoff. All rights reserved</Text>
          <Stack direction="row" spacing={6} justify="center" mt={4}>
            <a href="https://github.com" style={{ display: "flex", alignItems: "center" }}>
              <Icon as={ChakraImage} boxSize={8} src={githubwhite} _hover={{ opacity: 0.8 }} />
            </a>
            <a href="https://twitter.com/rakeoff_app" style={{ display: "flex", alignItems: "center" }}>
              <Icon as={ChakraImage} boxSize={8} src={twitterwhite} _hover={{ opacity: 0.8 }} />
            </a>
            <a href="https://discord.com" style={{ display: "flex", alignItems: "center" }}>
              <Icon as={ChakraImage} boxSize={8} src={discord} _hover={{ opacity: 0.8 }} />
            </a>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
