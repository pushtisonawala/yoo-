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
          Here are a few personal projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatterlyImg}
              isBlog={false}
              title="Chatterly"
              description="A real-time chat application built using React, Express, and Socket.IO. Users can engage in public and private messaging with a smooth UI."
              ghLink="https://github.com/pushtisonawala/chat-app"
              demoLink="https://chat-app-cyan-eta-44.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomineImg}
              isBlog={false}
              title="Ecomine"
              description="An eco-solution for tracking and rewarding afforestation efforts using carbon credits. Built with React, Express, and a dynamic backend logic."
              ghLink="https://github.com/pushtisonawala/EcoMine"
              demoLink="https://eco-mine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={planisphereImg}
              isBlog={false}
              title="Planisphere"
              description="A productivity planner for daily, weekly, and project-based timelines. Built using React and Tailwind for smooth, user-friendly experience."
              ghLink="https://github.com/pushtisonawala/Planisphere"
              demoLink="https://planisphere.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogifyImg}
              isBlog={false}
              title="Blogify"
              description="A blogging platform where users can write, update, and delete posts. Built using React, Node.js, Express, and EJS templating."
              ghLink="https://github.com/pushtisonawala/Blogify"
              demoLink="https://blogify-smoky-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expenseTrackerImg}
              isBlog={false}
              title="Expense Tracker"
              description="Track your expenses and visualize spending patterns using React and Chart.js. Simple and intuitive design to help manage finances."
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
