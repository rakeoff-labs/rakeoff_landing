export function e8sToIcp(x) {
  if (!x) return 0;
  return x / Math.pow(10, 8);
}

export const getApyEstimate = async (nnsClient) => {
  const votingPower = 200000000; // indicates that it's the max delay (2x stake amount)
  const stakeAmount = 100000000;

  try {
    // Retrieve network metrics
    const response = await fetch(
      "https://ic-api.internetcomputer.org/api/v3/metrics/governance-voting-power-total"
    ).then((x) => x.json());

    const totalNetworkVotingPower = e8sToIcp(
      Number(response.governance_voting_power_total[0][1])
    );

    // Calculate the voting power percentage
    const myPercent =
      (e8sToIcp(Number(votingPower)) / totalNetworkVotingPower) * 100;

    // Get the total reward pool
    const timeStats = await nnsClient.service.get_latest_reward_event();
    const totalRewardPool = timeStats.total_available_e8s_equivalent;

    // Calculate the rewards estimate for a day
    const dailyNeuronReward =
      (e8sToIcp(Number(totalRewardPool)) * myPercent) / 100;

    // Calculate the APY estimate
    const totalAnnualRewards = dailyNeuronReward * 365;
    const apyEstimate =
      (totalAnnualRewards / e8sToIcp(Number(stakeAmount))) * 100;

    return apyEstimate;
  } catch (e) {
    console.log("failed to fetch data");
    return null; // Indicate that the function failed by returning null
  }
};

export const icpToDollars = async (e8sIcp) => {
  const CoinApi =
    "https://api.coingecko.com/api/v3/simple/price?ids=internet-computer&vs_currencies=usd";

  try {
    let resp = await fetch(CoinApi).then((x) => x.json());
    let price = resp["internet-computer"].usd;

    let formatCurrency = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formatCurrency.format(price * e8sToIcp(e8sIcp));
  } catch (e) {
    return "$0.00";
  }
};
