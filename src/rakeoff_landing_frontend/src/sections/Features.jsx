// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import rakeoffBank from "../../assets/rakeoff_bank.png";

// const Features = () => {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end end"],
//   });

//   const bottomShadowValue = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["-100%", "0%"]
//   );
//   const imageValue = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
//   const topShadowValue = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["-25%", "100%"]
//   );

//   return (
//     <section className="scroll-container" ref={containerRef}>
//       <div className="copy">
//         <h2>Lorem ipsum dolor sit amet</h2>
//       </div>
//       <div className="img-container">
//         <motion.div className="img-inner" style={{ translateX: imageValue }}>
//           <motion.div
//             className="bottom-shadow"
//             style={{ translateX: bottomShadowValue }}
//           />
//           <img src={rakeoffBank} alt="a green plant" />
//           <motion.div
//             className="top-shadow"
//             style={{ translateX: topShadowValue }}
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Features;

"use client";
import React from "react";
import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  SimpleGrid,
  Container,
  Image,
} from "@chakra-ui/react";
import motokoBadge from "../../assets/motoko_badge.png";
import { boxBackgroundColor, boxBorderColor, boxFontColor } from "../colors";

const Features = () => {
  return (
    <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
      <Center mb={8}>
        <Heading size={{ base: "2xl", md: "3xl" }} color="white">
          Why Stake with Rakeoff?
        </Heading>
      </Center>
      <SimpleGrid
        columns={[1, null, 2]}
        mx={{ base: 3, md: 3, lg: 0 }}
        gap={{ base: 4, md: 8 }}
      >
        <FeaturesCard image={motokoBadge} heading={"Secure"} text={"dap"} />
        <FeaturesCard
          image={motokoBadge}
          heading={"Simple staking"}
          text={"dap"}
        />
        <FeaturesCard
          image={motokoBadge}
          heading={"Liquid staking (coming soon)"}
          text={"dap"}
        />
        <FeaturesCard
          image={motokoBadge}
          heading={"No-loss prize pool"}
          text={"dap"}
        />
      </SimpleGrid>
    </Container>
  );
};

export default Features;

const FeaturesCard = ({ image, heading, text }) => {
  return (
    <Center py={6}>
      <Box
        w="2xl"
        rounded={"2xl"}
        overflow={"hidden"}
        bg={boxBackgroundColor}
        border={"1px"}
        borderColor="black"
        boxShadow={useColorModeValue(
          "10px 10px 0 purple",
          "10px 10px 0 blueviolet"
        )}
      >
        <Box h={"250px"} borderBottom={"1px"} borderColor="black">
          <Image
            src={image}
            roundedTop={"sm"}
            h={60}
            w="full"
            alt={"Blog Image"}
          />
        </Box>
        <Box p={4}>
          <Text fontSize={"xs"} fontWeight="medium">
            {text}
          </Text>

          <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
            {heading}
          </Heading>
        </Box>
        <HStack borderTop={"1px"} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={"space-between"}
            roundedBottom={"sm"}
            cursor={"pointer"}
            w="full"
          ></Flex>
        </HStack>
      </Box>
    </Center>
  );
};
