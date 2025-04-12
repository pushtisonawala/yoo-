import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Use your actual images or placeholders for now
import chatterlyImg from "../../Assets/Projects/chatterly.png";
import ecomineImg from "../../Assets/Projects/ecomines.png";
import planisphereImg from "../../Assets/Projects/planisphere.png";
import blogifyImg from "../../Assets/Projects/blogs.png";
import expenseTrackerImg from "../../Assets/Projects/budget.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatterlyImg}
              isBlog={false}
              title="Chatterly"
              description="Real-time chat application featuring public and private messaging, AI-powered chat summary generation, and intuitive UI for seamless communication."
              ghLink="https://github.com/pushtisonawala/chat-app"
              demoLink="https://chat-app-cyan-eta-44.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomineImg}
              isBlog={false}
              title="Ecomine"
              description="Eco-solution platform for tracking and rewarding afforestation efforts using carbon credits system."
              ghLink="https://github.com/pushtisonawala/EcoMine"
              demoLink="https://eco-mine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={planisphereImg}
              isBlog={false}
              title="Planisphere"
              description="Productivity planner featuring daily, weekly, and project-based timeline management with intuitive interface."
              ghLink="https://github.com/pushtisonawala/Planisphere"
              demoLink="https://planisphere.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogifyImg}
              isBlog={false}
              title="Blogify"
              description="Comprehensive blogging platform with full CRUD operations for managing posts and user content."
              ghLink="https://github.com/pushtisonawala/Blogify"
              demoLink="https://blogify-smoky-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expenseTrackerImg}
              isBlog={false}
              title="Expense Tracker"
              description="Personal finance management tool with expense tracking and visual spending pattern analysis."
              ghLink="https://github.com/pushtisonawala/ExpenseTracker"
              demoLink="https://expense-tracker-gray-zeta.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
