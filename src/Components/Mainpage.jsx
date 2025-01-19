/* eslint-disable react/no-unescaped-entities */
import { Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Mainpage() {
  return (
    <div id="Hero">
      <Grid className="mainPageContainer" container spacing={2}>
        <Grid xs={8}>
          <div className="mainPageContent">
            <h1 className="mainInformationText">Front-End React Developer</h1>
            <h4
              style={{
                fontWeight: "500",
                width: "400px",
                fontSize: "18px",
                color: "#52616B",
              }}
            >
              I specialize in full-stack development, focusing on front-end
              technologies like React, HTML, CSS, and JavaScript, as well as
              back-end development with Python and Flask. I also have expertise
              in UI/UX design using Figma. Always eager to learn, I’m
              continuously expanding my skill set through new projects and
              technologies.
            </h4>
            <div style={{ display: "flex", gap: "15px" }}>
              <a
                href="https://www.linkedin.com/in/karrar-esbeyajani-23a67626a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  style={{ fontSize: "42px" }}
                  className="linkedinLogo"
                />
              </a>
              <a
                href="https://github.com/KEYAJANI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon
                  style={{ fontSize: "38px" }}
                  className="gitHubLogo"
                />
              </a>
            </div>
          </div>
        </Grid>
        <Grid xs={4}>
          <img
            className="esbeyajaniPhoto"
            src="https://i.ibb.co/9ptPtmF/de385c76-c3c5-4d01-868e-3e9278015c0a.jpg"
            alt="esbeyajani"
          />
        </Grid>
      </Grid>
    </div>
  );
}
