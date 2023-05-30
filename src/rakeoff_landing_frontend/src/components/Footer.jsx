import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logowhite from "../assets/logowhite.png";
import githubwhite from "../assets/githubwhite.png";
import twitterwhite from "../assets/twitterwhite.png";
import NewsletterSubscribe  from "./NewsletterSubscribe";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        < NewsletterSubscribe />
          <Col size={12} sm={6}>
            <img src={logowhite} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={githubwhite} alt="Icon" /></a>
              <a href="#"><img src={twitterwhite} alt="Icon" /></a>
            </div>
            <p>RakeOff. Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
