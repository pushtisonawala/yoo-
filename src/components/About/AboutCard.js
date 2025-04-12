import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pushti Sonawala </span>
            from <span className="purple">Varanasi, India.</span>
            <br />
            I am currently in my second year pursuing a B.E. in Computer Science
            at Dayananda Sagar College of Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I enjoy are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Music, Drama & Dance
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about Space & Tech
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Curious to learn, excited to build!"{" "}
          </p>
          <footer className="blockquote-footer">Pushti</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
