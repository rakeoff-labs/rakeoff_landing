import React from "react";
import {
  Box,
  Container,
  Heading,
  FormControl,
  FormErrorMessage,
  Input,
  useToast,
  Image,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { Button as ChakraButton } from "@chakra-ui/react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import rakeoff from "../assets/rakeoff.png";

const NewsletterSubscribe = () => {
  const toast = useToast();

  const CustomForm = ({ subscribe, status, message }) => {
    const handleSubmit = async (event) => {
      event.preventDefault();
      const email = event.target.email.value;

      try {
        await subscribe({ EMAIL: email });
        toast({
          title: "Success",
          description: "Thank you for subscribing!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "An unexpected error occurred. Please try again.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "stretch", md: "center" }}
        >
          <Flex
            direction="column"
            align="center"
            flex="1"
            mb={4}
            mr={{ base: 0, md: 2 }}
          >
            <Heading as="h2" size="lg" mb={4}>
              Subscribe to our Newsletter
            </Heading>
            <Stack
              direction={{ base: "column", md: "row" }}
              align="center"
              spacing={2}
            >
              <FormControl isInvalid={status === "error"}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  borderRadius="md"
                  p={2}
                  _focus={{ outline: "none" }}
                  bg="white"
                  color="black"
                />
                <FormErrorMessage>{message}</FormErrorMessage>
              </FormControl>
              <ChakraButton
                type="submit"
                colorScheme="gray"
                variant="solid"
                borderRadius="md"
                px={8}
                flexShrink={0}
                width={{ base: "100%", md: "auto" }}
                mt={{ base: 2, md: 0 }}
              >
                Subscribe
              </ChakraButton>
            </Stack>
          </Flex>
          <Box flex="1" mt={{ base: 0, md: 0 }}>
            <Image
              src={rakeoff}
              alt="Rakeoff"
              objectFit="contain"
              width="100%"
              height="auto"
              maxH="300px"
            />
          </Box>
        </Flex>
      </form>
    );
  };

  const url =
    "https://rakeoff.us21.list-manage.com/subscribe/post?u=0e1cb905f7a5cc73402e1489b&amp;id=b7a0216cc9&amp;f_id=00be35e7f0";

  return (
    <Box
      bgGradient="linear(to-r, #FF0000, #000000)"
      py={8}
      textAlign="center"
      color="white"
      borderRadius="3xl"
      width="100%"
      position="relative"
    >
      <Container maxW="container.md">
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              subscribe={subscribe}
              status={status}
              message={message}
            />
          )}
        />
      </Container>
    </Box>
  );
};

export default NewsletterSubscribe;
