import * as React from "react";
import Grid from "@mui/material/Grid";
import ImgMediaCard from "./ImgMediaCard";

function Projects() {
  const project = {
    fyay: {
      name: "Fyay Flowers",
      desicrption:
        "Fyay Flowers Powerful event solutions to create seamless, impactful experiences.",
      stacks: {
        html: "HTML",
        css: "CSS",
        flask: "Flask",
        python: "Python",
        javascript: "Java Script",
      },
      link: "https://fyay-flowers-production.up.railway.app/",
      img: "https://i.ibb.co/g9YSPK2/fyay.png",
    },
    MakhMakh: {
      name: "Makh Makh",
      desicrption:
        "Makh Makh is a memory game where players match identical pieces to test recall.",
      stacks: {
        html: "HTML",
        css: "CSS",
        flask: "Flask",
        python: "Python",
        javascript: "Java Script",
      },
      link: "/",
      img: "https://i.ibb.co/JdPHKGG/adgYs.png",
    },
  };
  
  return (
    <div id="Projects" className="aboutSection">
      <div className="aboutForm card-section">
        <Grid className="aboutPaddingIssue" container spacing={2}>
          <Grid xs={3}>
            <h2 style={{ fontSize: "32px" }}>Projects</h2>
          </Grid>
          <Grid className="aboutParagraph" xs={8}>
            <h5
              style={{ fontSize: "16px", fontWeight: "300", color: "#52616B" }}
            >
              I specialize in full-stack development, focusing on front-end
              technologies like React, HTML, CSS, and JavaScript, as well as
              back-end development with Python and Flask. I also have expertise
              in UI/UX design using Figma. Always eager to learn, I’m
              continuously expanding my skill set through new projects and
              technologies.
            </h5>
          </Grid>
          <Grid style={{margin: "0px 1rem 0 0"}} xs={5}>
            <ImgMediaCard project={project.fyay} />
          </Grid>
          <Grid className="project-cards" xs={5}>
            <ImgMediaCard project={project.MakhMakh} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Projects;
