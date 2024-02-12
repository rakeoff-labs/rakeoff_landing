import React from "react";
import {
  Image,
  AspectRatio,
  useColorModeValue,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { boxBackgroundColor, boxBorderColor } from "./../colors";

import { motion } from "framer-motion";

export const MotionBox = motion(Box);

export default function Step({ heading, description, stepGif, isEven }) {
  const isDesktop = useBreakpointValue({ base: false, md: true, lg: true });

  return (
    <>
      <SimpleGrid columns={[1, null, 2]} w="100%" spacing="45px">
        {isEven && isDesktop ? (
          <>
            <VideoStep stepGif={stepGif} />{" "}
            <TextStep heading={heading} description={description} />
          </>
        ) : (
          <>
            <TextStep heading={heading} description={description} />
            <VideoStep stepGif={stepGif} />
          </>
        )}
      </SimpleGrid>
    </>
  );
}

function TextStep({ heading, description }) {
  return (
    <div>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "3xl", md: "2xl", lg: "4xl", xl: "5xl" }}
        mx={{ base: 2, md: 0 }}
      >
        <Text
          textAlign={{
            base: "center",
            md: "center",
            lg: "center",
            xl: "start",
          }}
          mb={{ base: 2, md: 0, lg: 2, xl: 0 }}
          color={"purple.400"}
        >
          {heading}
        </Text>
      </Heading>
      <Text
        textAlign={{
          base: "center",
          md: "center",
          lg: "center",
          xl: "start",
        }}
        color={"gray.100"}
        fontSize={{ base: "lg", md: "lg", lg: "xl" }}
        mt={{ base: 8, md: 8 }}
        mx={{ base: 2, md: 2, lg: 2 }}
      >
        {description}
      </Text>
    </div>
  );
}

function VideoStep({ stepGif }) {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <>
      <Flex
        flex={1}
        justify={"center"}
        align={"center"}
        position={"relative"}
        w={"full"}
      >
        <MotionBox
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
          height={{ base: "210px", md: "200px", lg: "220px", xl: "300px" }}
          rounded={"2xl"}
          mx={{ base: 3, md: 3, lg: 3, xl: 0 }}
          width={"full"}
          overflow={"hidden"}
          borderRadius="2xl"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          bg={boxBackgroundColor}
          border={boxBorderColor}
          borderColor="black"
          boxShadow={useColorModeValue(
            "10px 10px 0 purple",
            "10px 10px 0 blueviolet"
          )}
        >
          <AspectRatio ratio={{ base: 16 / 9, md: 16 / 9, lg: 21 / 10 }}>
            <Image src={stepGif} alt="step" objectFit="cover" />
          </AspectRatio>
        </MotionBox>
      </Flex>
    </>
  );
}
