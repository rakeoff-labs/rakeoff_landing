import React from "react";
import { Container, Stack, Center, Heading } from "@chakra-ui/react";
import Step from "./Step";
import step1 from "../../assets/step1.gif";
import step2 from "../../assets/step2.gif";
import step3 from "../../assets/step3.gif";
import step4 from "../../assets/step4.gif";

export default function AllSteps() {
  return (
    <>
      <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
        <Center mb={8}>
          <Heading size={{ base: "2xl", md: "3xl" }} color="white">
            How does it Work?
          </Heading>
        </Center>
        <Stack
          direction="column"
          w="100%"
          spacing={{ base: "50px", md: "100px" }}
        >
          <Step
            stepGif={step1}
            heading={"1. Login with Internet Identity"}
            description={`Access the Rakeoff dApp securely using your Internet Identity, which
            offers a more secure option compared to traditional email and
            password logins in the Web2 space.
       `}
          />
          <Step
            isEven
            stepGif={step2}
            heading={"2. Add a minimum of 1 ICP"}
            description={`To deposit ICP into your wallet, click 'Receive' to copy your
            wallet address. Then, go to any cryptocurrency exchange and send
            ICP to your Rakeoff wallet address.`}
          />
          <Step
            stepGif={step3}
            heading={`3. Just click 'Stake'`}
            description={`With a minimum of 1 ICP, click the "Stake" button and confirm the
            amount you wish to stake. Your staked ICP will be locked and start
            earning ICP rewards.
          `}
          />
          <Step
            isEven
            stepGif={step4}
            heading={"4. Disburse your rewards"}
            description={`Once you have accrued 1 ICP in rewards, explore our disbursement
            options, such as entering the no-loss prize pool for a chance to
            win big, or withdrawing your ICP to your wallet.`}
          />
        </Stack>
      </Container>
    </>
  );
}
