import React from 'react';
import { Box, Container, Heading, Text, FormControl, FormErrorMessage, Input, useToast } from '@chakra-ui/react';
import { Button as ChakraButton } from '@chakra-ui/react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const NewsletterSubscribe = () => {
  const toast = useToast();

  const CustomForm = ({ subscribe, status, message }) => {
    const handleSubmit = async (event) => {
      event.preventDefault();
      const email = event.target.email.value;

      try {
        await subscribe({ EMAIL: email });
        toast({
          title: 'Success',
          description: 'Thank you for subscribing!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: 'Error',
          description: 'An unexpected error occurred. Please try again.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={status === 'error'} mb={4}>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            borderRadius="md"
            p={2}
            _focus={{ outline: 'none' }}
          />
          <FormErrorMessage>{message}</FormErrorMessage>
        </FormControl>
        <ChakraButton
          type="submit"
          colorScheme="red"
          variant="solid"
          borderRadius="md"
          px={8}
        >
          Subscribe
        </ChakraButton>
      </form>
    );
  };

  const url = 'https://your-mailchimp-url.us18.list-manage.com/subscribe/post?u=XXXXXXXXXXXXXX&id=XXXXXXXXXX'; // Replace with your Mailchimp URL

  return (
    <Box
      bgGradient="linear(to-r, #FF0000, #000000)"
      py={8}
      textAlign="center"
      color="white"
      borderRadius="md"
      px={4}
    >
      <Container maxW="container.md">
        <Heading as="h2" size="lg" mb={4}>
          Subscribe to our Newsletter
        </Heading>
        <MailchimpSubscribe url={url} render={({ subscribe, status, message }) => (
          <CustomForm subscribe={subscribe} status={status} message={message} />
        )} />
      </Container>
    </Box>
  );
};

export default NewsletterSubscribe;

