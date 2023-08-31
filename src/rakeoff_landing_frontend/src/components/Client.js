import { idlFactory as RakeoffStatisticsIDL } from "../../../declarations/RakeoffStatistics/index";
import { Actor, HttpAgent } from "@dfinity/agent";

export const startStatisticsClient = async () => {
  const canisterId = process.env.REACT_APP_RAKEOFF_STATISTICS_CANISTER_ID;

  return Actor.createActor(RakeoffStatisticsIDL, {
    agent: new HttpAgent({
      host: "https://icp-api.io",
    }),
    canisterId: canisterId,
  });
};
