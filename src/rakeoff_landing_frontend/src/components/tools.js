export function e8sToIcp(x) {
  if (!x) return 0;
  return x / Math.pow(10, 8);
}

export const getRakeoffStats = async () => {
  try {
    const response = await fetch(
      "https://jgvzt-eiaaa-aaaak-ae5kq-cai.raw.icp0.io/v1/rakeoff-stats"
    );
    if (!response.ok) {
      // If the response is not ok (e.g., 404, 500), return an empty object
      return {};
    }
    const data = await response.json();
    return data.icp_stats || {}; // Return icp_stats, or an empty object if icp_stats is undefined
  } catch (error) {
    // In case of a network error or json parsing error, return an empty object
    console.error("Error fetching rakeoff stats:", error);
    return {};
  }
};

export const getApyEstimate = async () => {
  const votingPower = 200000000; // indicates that it's the max delay (2x stake amount)
  const stakeAmount = 100000000;

  try {
    // Retrieve network metrics and total reward pool
    const [response1, response2] = await Promise.all([
      await fetch(
        "https://ic-api.internetcomputer.org/api/v3/metrics/governance-voting-power-total"
      ).then((x) => x.json()),
      await fetch(
        "https://ic-api.internetcomputer.org/api/v3/metrics/latest-reward-event-total-available"
      ).then((x) => x.json()),
    ]);

    // Calculate the voting power percentage
    const totalNetworkVotingPower = e8sToIcp(
      Number(response1.governance_voting_power_total[0][1])
    );
    const myPercent =
      (e8sToIcp(Number(votingPower)) / totalNetworkVotingPower) * 100;

    // Calculate the rewards estimate for a day
    const totalRewardPool = response2.latest_reward_event_total_available[0][1];
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
  const CoinApi = "https://api.coinbase.com/v2/prices/ICP-USD/buy";

  try {
    let { data : { amount }} = await fetch(CoinApi).then((x) => x.json());

    let formatCurrency = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0, // No decimals
      maximumFractionDigits: 0, // No decimals
    });

    return formatCurrency.format(amount * e8sToIcp(e8sIcp));
  } catch (e) {
    return "$0.00";
  }
};