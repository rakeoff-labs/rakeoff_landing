import React, { useContext } from "react";
import "./Services.css";
import Card from "./Card";
import cryptologo from "../assets/cryptologo.png";
import { themeContext } from "../Context";
import { motion } from "framer-motion";
import one from "../assets/one.png";
import fix1 from "../assets/fix1.png";


const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme && theme.state ? theme.state.darkMode : false;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Services</span>
        <span>Rakeoff, the First Rewards Concept in ICP.</span>
        <spane>
          <br />
          Deposit for daily prize opportunities, keep your funds even if you don't win.
          <br />
          Exchange ICP for other cryptos with low fees.
          <br />
          Join Rakeoff for growth and rewards.
          <br />
        </spane>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={one}
            heading={"Earn ICP Rewards"}
            detail={"Pooled investments together to earn some ICP!"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={fix1}
            heading={"100% No loss"}
            detail={"We provided a completely secure and safe service to invest your money and best part you can never lose!"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={cryptologo}
            heading={"Convert ICP to BTC at low fees"}
            detail={
              "Exchange your ICP money into BTC for a low rate of 3%"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
