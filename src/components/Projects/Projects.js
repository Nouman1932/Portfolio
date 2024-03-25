import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Metakidia from "../Images/MIband.jpg"
import MainScreen from "../Images/MPPT.jpg"
import react from "../Images/react.jpg"
import arena from "../Images/arena.jpg"
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Metakidia}
              title="MetaKidia"
              description="
              MetaKidia is a comprehensive BLE Android application designed for seamless connections 
              with MI bands. The app facilitates data retrieval from MI bands and presents it within 
              the application. It further computes weekly averages based on the collected data and visualizes 
              the averages through graphical representation. Additionally, the project integrates API with AWS 
              Cognito for user authentication functionalities such as sign-up, login, and password reset"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MainScreen}
              title="MPPT LIVE"
              description="Introducing SolarApp, the cutting-edge mobile application that's transforming the 
              way you manage MPPT Controllers. Acting as the essential link between your smartphone and the 
              embedded Maximum Power Point Tracking (MPPT) device within your solar system, SolarApp is 
              revolutionizing solar system management."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              title="Dashboard"
              description="In one of my recent projects, I contributed to the enhancement of an existing web 
              application by refining its UI and introducing new functionalities. Leveraging React.js and JSX, 
              I collaborated to integrate Firebase API for cloud capabilities. The focal point of my work was revamping 
              the admin dashboard, empowering administrators to efficiently monitor their mobile app's status while 
              incorporating additional features for enhanced functionality and user experience"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arena}
              title="FYP ARENA BOOKING SYSTEM"
              description="For my Final Year Project (FYP), I developed a web application using React.js 
              that serves as a booking system for indoor sports enthusiasts. In this project, players can 
              conveniently check the availability of indoor grounds near their location and reserve their 
              preferred slots for gaming sessions. Additionally, I implemented an admin portal where 
              administrators can review bookings and manage them, including the capability to cancel 
              reservations if necessary."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
