import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Center,
  Container,
  Skeleton,
} from "@chakra-ui/react";
import { startNNSClient, startStatisticsClient } from "../components/Client";
import { e8sToIcp, getApyEstimate, icpToDollars } from "../components/tools";
import { boxFontColor } from "../colors";

const Statistics = () => {
  const [stakerStats, setStakerStats] = useState({});
  const [dollarPrizes, setDollarPrizes] = useState("");
  const [apyEstimate, setApyEstimate] = useState(0);
  const [loaded, setLoaded] = useState(false);

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
    <Container mt={{ base: 12, md: "5rem" }} maxW="7xl" p={0}>
      <SimpleGrid
        columns={[2, 2, 4]}
        spacing={8}
        mx={{ base: 3, md: 3, lg: 0 }}
        justifyItems={{ base: "start", md: "center" }}
      >
        <StatBox
          title={`${apyEstimate.toFixed(1)}%`}
          description={"APY"}
          loaded={loaded}
        />
        <StatBox
          title={Number(stakerStats.total_icp_stakers).toLocaleString()}
          description={"Stakers"}
          loaded={loaded}
        />
        <StatBox
          title={Math.round(
            e8sToIcp(Number(stakerStats.total_icp_staked))
          ).toLocaleString()}
          description={"ICP staked"}
          loaded={loaded}
        />
        <StatBox
          title={dollarPrizes}
          description={"Prizes awarded"}
          loaded={loaded}
        />
      </SimpleGrid>
    </Container>
  );
};

export default Statistics;

const StatBox = ({ title, description, loaded }) => {
  return (
    <Box borderLeft="1px solid" borderColor="gray.500" ps={3}>
      {loaded ? (
        <Heading color="white" size={{ base: "md", md: "xl" }}>
          {title}
        </Heading>
      ) : (
        <Skeleton h="40px" w="90px" mb={1} />
      )}
      <Text color={boxFontColor}>{description}</Text>
    </Box>
  );
};
