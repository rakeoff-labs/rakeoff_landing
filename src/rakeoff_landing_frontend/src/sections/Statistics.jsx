import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Center,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  e8sToIcp,
  getApyEstimate,
  getRakeoffStats,
  icpToDollars,
} from "../components/tools";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  boxBackgroundColor,
  boxBorderColor,
  boxFontColor,
  mainBackgroundColor,
} from "../colors";

const itemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const containerAnimation = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const Statistics = () => {
  const [stakerStats, setStakerStats] = useState({});
  const [dollarPrizes, setDollarPrizes] = useState("");
  const [apyEstimate, setApyEstimate] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const isDesktop = useBreakpointValue({ base: false, md: true });

  const fetchStats = async () => {
    const [apy, stats] = await Promise.all([
      getApyEstimate(),
      getRakeoffStats(),
    ]);

    setDollarPrizes(await icpToDollars(Number(stats.total_rewarded)));
    setApyEstimate(Math.ceil(apy * 10) / 10);
    setStakerStats(stats);
    setLoaded(true);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <Center>
      <Flex
        mx={{ base: 3, md: 3, lg: 0 }}
        zIndex={1}
        w="7xl"
        bg={`linear-gradient(to bottom, ${boxBackgroundColor} 30%, ${mainBackgroundColor} 100%)`}
        borderTop={boxBorderColor}
        h={{ base: "100%", md: "150px" }}
        borderTopRadius={"3xl"}
        p={5}
        mt={-10}
        align="center"
      >
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="visible"
          style={{ width: "100%" }}
        >
          <SimpleGrid
            columns={[2, 2, 4]}
            spacing={{ base: 0, md: 8 }}
            spacingY={{ base: 8, md: 0 }}
            mx={{ base: 3, md: 3, lg: 0 }}
            justifyItems={"center"}
            w="100%"
            textAlign={"center"}
          >
            <StatBox
              title={loaded ? `${apyEstimate.toFixed(1)}%` : "0.0%"}
              description={"APY estimate"}
              first={true}
            />
            <StatBox
              title={
                loaded && stakerStats.total_stakers !== undefined
                  ? Number(stakerStats.total_stakers).toLocaleString()
                  : "0"
              }
              description={"Total stakers"}
            />
            <StatBox
              title={
                loaded
                  ? Math.round(
                      e8sToIcp(Number(stakerStats.total_staked))
                    ).toLocaleString()
                  : 0
              }
              description={"ICP staked"}
              first={!isDesktop ? true : false}
            />
            <StatBox
              title={loaded ? dollarPrizes : "$0.00"}
              description={"Prizes awarded"}
            />
          </SimpleGrid>
        </motion.div>
      </Flex>
    </Center>
  );
};

export default Statistics;

const StatBox = ({ title, description, first }) => {
  return (
    <Box
      borderLeft={!first ? "1px solid" : null}
      borderColor={"gray.500"}
      w={"100%"}
    >
      <motion.div variants={itemAnimation}>
        <Heading color="white" size={{ base: "lg", md: "xl", lg: "2xl" }}>
          {title}
        </Heading>
        <Text mt={3} color={boxFontColor}>
          {description}
        </Text>
      </motion.div>
    </Box>
  );
};
