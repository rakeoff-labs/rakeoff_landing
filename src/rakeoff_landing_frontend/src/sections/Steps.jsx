import React from "react";
import { Heading, Center, Container } from "@chakra-ui/react";
import step1 from "../../assets/step1.gif";
import step3 from "../../assets/step3.gif";
import step2 from "../../assets/step2.gif";
import step4 from "../../assets/step4.gif";
import StepsEven from "./StepsEven";
import StepsOdd from "./StepsOdd";

const Steps = () => {
  return (
    <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
      <Center mt={4}>
        <Heading size={{ base: "2xl", md: "3xl" }} color="white">
          How it Works
        </Heading>
      </Center>
      <StepsOdd
        first
        heading={"1. Login with Internet Identity"}
        description={`Access the Rakeoff dApp securely using your Internet Identity, which
           offers a more secure option compared to traditional email and
           password logins in the Web2 space.
      `}
        stepgif={step1}
      />
      <StepsEven
        heading={"2. Add a minimum of 1 ICP"}
        description={`To deposit ICP into your wallet, click 'Receive' to copy your
              wallet address. Then, go to any cryptocurrency exchange and send
              ICP to your Rakeoff wallet address.`}
        stepGif={step2}
      />
      <StepsOdd
        heading={`3. Just click 'Stake'`}
        description={`With a minimum of 1 ICP, click the "Stake" button and confirm the
        amount you wish to stake. Your staked ICP will be locked and start
        earning ICP rewards.
      `}
        stepgif={step3}
      />
      <StepsEven
        heading={"4. Disburse your rewards"}
        description={`Once you have accrued 1 ICP in rewards, explore our disbursement
        options, such as entering the no-loss prize pool for a chance to
        win big, or withdrawing your ICP to your wallet.`}
        stepGif={step4}
      />
    </Container>
  );
};

export default Steps;
