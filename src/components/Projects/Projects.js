import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MainScreen from "../Images/MPPTCheck.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={MainScreen}
              isBlog={false}
              title="MPPT LIVE"
              description="Introducing SolarApp, the cutting-edge mobile application that's transforming the 
              way you manage MPPT Controllers. Acting as the essential link between your smartphone and the 
              embedded Maximum Power Point Tracking (MPPT) device within your solar system, SolarApp is 
              revolutionizing solar system management."
              ghLink="https://play.google.com/store/apps/details?id=com.mpptlive"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={MainScreen}
              isBlog={false}
              title="Raw APP"
              description="Raw empowers content creators to grow their audience and visibility. Starting at Level 1, creators can share quick snippets or fun moments (30 sec). As they earn points from viewer ratings, they can advance to Level 2, where they can post short stories or clips (1 min). Reach 100 points to level up and gain increased exposure to viewers and brands.
"
              ghLink="https://play.google.com/store/apps/details?id=com.tnc.rawapp"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={MainScreen}
              isBlog={false}
              title="Franoak Pics: Your Go-To Photo Editor"
              description="Franoak Pics is a user-friendly photo editor designed to help you enhance your photos with ease. Whether you want to apply filters, crop images, or add blur effects, Franoak Pics offers a variety of tools to make your photos look stunning."
              ghLink="https://play.google.com/store/apps/details?id=com.demo.shapicalphotoedit"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
