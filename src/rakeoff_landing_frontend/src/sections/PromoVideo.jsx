import React from "react";
import { Heading, Center, AspectRatio, Container } from "@chakra-ui/react";

const PromoVideo = () => {
  return (
    <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
      <Center mb={8}>
        <Heading size={{ base: "2xl", md: "3xl" }} color="white">
          Simplified DeFi
        </Heading>
      </Center>

      <AspectRatio
        maxW="100%"
        mx={{ base: 3, md: 3, lg: 0 }}
        ratio={16 / 9}
        m={3}
      >
        <iframe
          style={{ borderRadius: "15px" }}
          src="https://www.youtube.com/embed/wac7H03rx_E?si=UzpuSdDcOzGK2CfK"
          title="Rakeoff Promo Video"
        ></iframe>
      </AspectRatio>
    </Container>
  );
};

export default PromoVideo;
