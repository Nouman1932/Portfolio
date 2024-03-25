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
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MainScreen}
              isBlog={false}
              title="MPPT LIVE"
              description="Introducing SolarApp, the cutting-edge mobile application that's transforming the 
              way you manage MPPT Controllers. Acting as the essential link between your smartphone and the 
              embedded Maximum Power Point Tracking (MPPT) device within your solar system, SolarApp is 
              revolutionizing solar system management."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="Dashboard"
              description="In one of my recent projects, I contributed to the enhancement of an existing web 
              application by refining its UI and introducing new functionalities. Leveraging React.js and JSX, 
              I collaborated to integrate Firebase API for cloud capabilities. The focal point of my work was revamping 
              the admin dashboard, empowering administrators to efficiently monitor their mobile app's status while 
              incorporating additional features for enhanced functionality and user experience"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arena}
              isBlog={false}
              title="FYP ARENA BOOKING SYSTEM"
              description="For my Final Year Project (FYP), I developed a web application using React.js 
              that serves as a booking system for indoor sports enthusiasts. In this project, players can 
              conveniently check the availability of indoor grounds near their location and reserve their 
              preferred slots for gaming sessions. Additionally, I implemented an admin portal where 
              administrators can review bookings and manage them, including the capability to cancel 
              reservations if necessary."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
