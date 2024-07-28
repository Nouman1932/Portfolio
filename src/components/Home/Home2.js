import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import profile from "../Images/profile.png"
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm <span className="purple"> Nouman Mahmood </span>, As a dedicated full-time mobile developer specializing in creating dynamic Android apps, I bring a wealth of experience to every project. With a strong background in designing and developing advanced apps, such as BLE for MI Band, Project App, and e-store solutions, I have worked on numerous projects involving Firebase API calls, Stripe payment methods, push notifications, and both short and long-term initiatives. Additionally, I have developed social media apps and handled backend tasks, including server-side deployment, cloud functions, and Stripe backend implementation in Node.js. 🤷‍♂️
              <br />
              <br />Skilled in core languages like 
              <i>
                <b> <span className="purple"> Kotlin, Java, JavaScript, JetPack Compose </span> alongside expertise in <span className="purple"> XML</span>. I bring a comprehensive understanding of modern development tools and frameworks to all my projects. <span className="purple"></span></b>
              </i>
              <br />
              <br />
              Explore my expertise in crafting innovative Android apps and dynamic React JS interfaces on 
              my portfolio website, showcasing cutting-edge mobile and web development. &nbsp;
              <i>
               
              </i>
              <br />
              <br />
             
              <i>
               
              </i>
             
              <i>
          
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={profile} className="logo3"  alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Nouman1932"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nouman-mehmood-794b45240/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mian_nouman25/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
