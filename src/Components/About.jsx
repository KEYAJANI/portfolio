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
              src="https://media.discordapp.net/attachments/827757330883018782/1192516673245294703/IMG_4841.jpg?ex=65a95cb2&is=6596e7b2&hm=eee15d7d27d6b5ff054615153cfb95e9cf28033c7f5926a9387bd71bb08151ae&=&format=webp&width=512&height=683"
              alt="burj-baghdad"
            />
          </li>
          <li>
            <img
              className="aboutMePhotos karrarKitty"
              src="https://media.discordapp.net/attachments/827757330883018782/1192516673832505384/IMG_5144.jpg?ex=65a95cb2&is=6596e7b2&hm=5ae9f444fa1e1527dfa5d37228bd708a25c9eef90ff4b44e704eebffe53a1917&=&format=webp&width=512&height=683"
              alt="karrarKitty"
            />
          </li>
          <li>
            <img
              className="aboutMePhotos karrarPhoto"
              src="https://media.discordapp.net/attachments/827757330883018782/1192516674906243172/IMG_0813.png?ex=65a95cb3&is=6596e7b3&hm=6ee21bc4914e9e66b434443ab612a0a4289a991c07113ae45033edde83693f81&=&format=webp&quality=lossless&width=391&height=683"
              alt="KarrarPhoto"
            />
          </li>
        </ul>
      </div>
      <div  className="aboutForm">
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
              Hello world, I'm Karrar Esbeyajani!
            </h3>
            <h3
              style={{
                fontWeight: "300",
                color: "black",
                lineHeight: "24px",
                width: "540px",
              }}
            >
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in <span style={{ fontWeight: "500" }}>HTML</span>,{" "}
              <span style={{ fontWeight: "500" }}>CSS</span>,{" "}
              <span style={{ fontWeight: "500" }}>JavaScript</span>,{" "}
              <span style={{ fontWeight: "500" }}>React</span> and{" "}
              <span style={{ fontWeight: "500" }}>Tailwind</span>. I excel in
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
