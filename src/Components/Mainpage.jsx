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
              Hi, I'm Karrar Esbeyajani, a Front-End React Developer who loves
              building cool things with code. In addition to coding, I also play
              FootBall.
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
