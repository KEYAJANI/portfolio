/* eslint-disable react/no-unescaped-entities */
import { Grid } from "@mui/material";

export default function About() {
  return (
    <div id="About" className="aboutSection">
      <div style={{ lineHeight: "5px" }}>
        <h2 style={{ fontSize: "32px" }}>About Me</h2>
        <h5 style={{ fontSize: "16px", fontWeight: "300", color: "#52616B" }}>
          Just a quick glimpse.
        </h5>
      </div>
      <div className="photosSection">
        <ul style={{ display: "flex" }}>
          <li>
            <img
              className="aboutMePhotos burjBaghdad"
              src="https://i.ibb.co/N7HXWKh/IMG-4841.jpg"
              alt="burj-baghdad"
            />
          </li>
          <li>
            <img
              className="aboutMePhotos karrarKitty"
              src="https://i.ibb.co/sQX5pGv/IMG-5144.jpg"
              alt="karrarKitty"
            />
          </li>
          <li>
            <img
              className="aboutMePhotos karrarPhoto"
              src="https://i.ibb.co/QC7fwJD/IMG-0813.jpg"
              alt="KarrarPhoto"
            />
          </li>
        </ul>
      </div>
      <div className="aboutForm">
        <Grid className="aboutPaddingIssue" container spacing={2}>
          <Grid xs={3}>
            <h3
              className="aboutText"
              style={{ fontWeight: "300", color: "#52616B" }}
            >
              About
            </h3>
          </Grid>
          <Grid className="aboutParagraph" xs={8}>
            <h3 style={{ fontWeight: "300", color: "black" }}>
              Hello World, I'm Karrar Esbeyajani!
            </h3>
            <h3
              style={{
                fontWeight: "300",
                color: "black",
                lineHeight: "24px",
                width: "540px",
              }}
            >
              Hello World, I'm Karrar Esbeyajani! I am a Full-Stack Developer
              with a strong focus on front-end development, specializing in
              React, HTML, CSS, JavaScript, and Tailwind CSS for building
              dynamic, user-friendly interfaces. On the back-end, I work with
              Python, Flask, and API integrations to create robust server-side
              solutions. Additionally, I am passionate about UI/UX design, using
              tools like Figma to ensure seamless and engaging user experiences.
              I am always learning new technologies and improving my skills to
              stay ahead in the ever-evolving world of web development. When I'm
              not coding, you can find me playing football or enjoying a game of
              FIFA!
            </h3>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
