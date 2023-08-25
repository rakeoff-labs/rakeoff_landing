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
import { startNNSClient, startStatisticsClient } from "../components/Client";
import { e8sToIcp, getApyEstimate, icpToDollars } from "../components/tools";
import { motion } from "framer-motion";
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

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const fetchStats = async () => {
    const [statisticsClient, nnsClient] = await Promise.all([
      startStatisticsClient(),
      startNNSClient(),
    ]);

    const [apy, stats] = await Promise.all([
      getApyEstimate(nnsClient),
      statisticsClient.get_rakeoff_stats(),
    ]);

    setDollarPrizes(await icpToDollars(stats.total_icp_rewards));
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
                loaded
                  ? Number(stakerStats.total_icp_stakers).toLocaleString()
                  : 0
              }
              description={"Total stakers"}
            />
            <StatBox
              title={
                loaded
                  ? Math.round(
                      e8sToIcp(Number(stakerStats.total_icp_staked))
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
        <Heading color="white" size={{ base: "lg", md: "2xl" }}>
          {title}
        </Heading>
        <Text mt={3} color={boxFontColor}>
          {description}
        </Text>
      </motion.div>
    </Box>
  );
};
