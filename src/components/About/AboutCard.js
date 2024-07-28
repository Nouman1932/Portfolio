import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nouman Mahmood </span>
            from <span className="purple">Lahore, Pakistan</span>
            <br />
            I am currently employed as a Android Developer at TapsNClick.
            <br />
            I have completed BS (Software Engineering) From University of Central Punjab
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Research in Astronomy and Astrophysics
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The more you study, the more you know; how less you know."{" "}
          </p>
          <footer className="blockquote-footer">IMRAN KHAN</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
