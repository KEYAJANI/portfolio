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
              As a Junior MERN Full-Stack Developer, I possess an impressive
              arsenal of skills in{" "}
              <span style={{ fontWeight: "500" }}>JavaScript</span>,{" "}
              <span style={{ fontWeight: "500" }}>React</span>,{" "}
              <span style={{ fontWeight: "500" }}>NodeJS</span> and{" "}
              <span style={{ fontWeight: "500" }}>MongoDB</span>. I excel in
              designing and maintaining responsive websites that offer a smooth
              user experience. My expertise lies in crafting dynamic, engaging
              interfaces through writing clean and optimized code and utilizing
              cutting-edge development tools and techniques. I am also a team
              player who thrives in collaborating with cross-functional teams to
              produce outstanding web applications.
            </h3>
            <h3
              className="aboutParagraph"
              style={{ fontWeight: "300", color: "black", width: "540px" }}
            >
              When I'm not at my desk I am probably playing FootBall, Or playing
              FIFA :){" "}
            </h3>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
