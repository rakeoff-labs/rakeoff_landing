import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const data = [
  { text: "Open Source Projects", number: 20 },
  { text: "Students", number: 1000 },
  { text: "Github Followers", number: 1900 },
  { text: "Github Stars", number: 5000 }
];

const Statistics = () => (
  <Box as="section" py={["4", "8", "12"]} textAlign="center">
    <Heading
      as="h3"
      size="xl"
      fontWeight="800"
      fontSize={["48px", "48px", "56px"]}
      lineHeight={["56px", "48px", "56px"]}
      width="max-content"
      maxW="100%"
      bgGradient="linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)"
      bgClip="text"
      color="transparent"
      marginBottom="16px"
      padding="0"
      mx="auto"
      textAlign="center"
    >
      Statistics
    </Heading>

    <SimpleGrid spacing={10} columns={[1, 2, 4]} mx="auto">
      {data.map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <Box
            bg="rgb(18,28,35)"
            p={8}
            borderRadius="lg"
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            color="white"
            width="250px"
            minH="250px"
          >
            <Heading size="lg" mb={4} fontSize={["xl", "xl", "2xl"]}>
              {stat.text}
            </Heading>
            <Text fontSize={["xl", "xl", "2xl"]}>{`${stat.number}+`}</Text>
          </Box>
        </motion.div>
      ))}
    </SimpleGrid>
  </Box>
);

export default Statistics;
