import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Button variant="primary" href={props.ghLink} target="_blank" style={{fontSize:"30px"}}>
      <FontAwesomeIcon icon={faGooglePlay} style={{marginRight:13}}/>
      {props.isBlog ? "Blog" : "PlayStore"}
      </Button>
      <Card.Body>
        <Card.Title style={{ fontSize: '24px'}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        {/* Add Play Store button */}
        {props.playStoreLink && (
          <Button
            variant="success"
            href={props.playStoreLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            {/* <AiFillAndroid /> &nbsp; */}
            {"Play Store"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
