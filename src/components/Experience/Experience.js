import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { DiReact, DiCode } from "react-icons/di";
import { BsLightningCharge, BsPeople, BsGear, BsArrowRepeat } from "react-icons/bs";

function Experience() {
  const experiences = [
    {
      company: "QuickGick",
      title: "Full Stack Developer",
      duration: "2025 - Present",
      icon: <DiCode className="experience-icon" />,
      points: [
        "Building web applications with MERN stack",
        "Creating and integrating APIs",
        "Working with TypeScript and Next.js",
        "Team collaboration and code reviews"
      ],
      color: "#c770f0"
    },
    {
      company: "DoconRx",
      title: "Frontend Developer",
      duration: "2025 - Present",
      icon: <DiReact className="experience-icon" />,
      points: [
        "Building React.js applications",
        "Creating responsive UI components",
        "Working with UI/UX team",
        "Frontend development and maintenance"
      ],
      color: "#64ffda"
    }
  ];

  const perks = [
    {
      icon: <BsLightningCharge />,
      title: "Fast Learner",
      description: "Quick to grasp new technologies and frameworks"
    },
    {
      icon: <BsPeople />,
      title: "Team Player",
      description: "Strong communication and collaboration skills"
    },
    {
      icon: <BsGear />,
      title: "Problem Solver",
      description: "Analytical approach to solving complex challenges"
    },
    {
      icon: <BsArrowRepeat />,
      title: "Adaptable",
      description: "Flexible in learning and implementing new technologies"
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-center mb-5 animate-fade-in">
          My Professional <strong className="purple">Experience</strong>
        </h1>
        
        <Row className="justify-content-center">
          {experiences.map((exp, index) => (
            <Col md={6} key={index} className="mb-4">
              <div className={`experience-card animate-slide-${index % 2 ? 'right' : 'left'}`}>
                <div className="experience-header" style={{ borderColor: exp.color }}>
                  <span className="icon-wrapper">{exp.icon}</span>
                  <div className="title-wrapper">
                    <h3 style={{ color: exp.color }}>{exp.company}</h3>
                    <h5 style={{ color: "#ffffff" }}>{exp.title}</h5>
                    <p style={{ color: "#E6E6FA" }}>{exp.duration}</p>
                  </div>
                </div>
                <ul className="experience-points">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>

        <h1 className="project-heading text-center mb-5 mt-5">
          Why <strong className="purple">Hire Me?</strong>
        </h1>
        
        <Row className="justify-content-center">
          {perks.map((perk, index) => (
            <Col md={3} sm={6} key={index} className="mb-4">
              <div className="perk-card animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="perk-icon">
                  {perk.icon}
                </div>
                <h3>{perk.title}</h3>
                <p>{perk.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
