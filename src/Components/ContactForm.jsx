import { Button, Chip, Divider, Grid, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyEmailButton from "./CopyEmailButton";
import InstagramIcon from "@mui/icons-material/Instagram";
const ContactForm = () => {
  const handleEmailButtonClick = () => {
    const subject = encodeURIComponent("");
    const body = encodeURIComponent("Hello, ");

    const mailtoLink = `mailto:esbeyajanikarrar@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <>
      <Stack className="contactForm contactFormForPhoneSizeScreen" spacing={2}>
        <Button
          className="button divderBetweenButtons"
          id="copyEmailButton"
          style={{ backgroundColor: "#c8c8c875" }}
          variant="text"
        >
          <CopyEmailButton />
        </Button>
        <Divider className="button divderBetweenButtons">
          <Chip label="Or" size="small" />
        </Divider>
        <Button
          className="button"
          startIcon={<MailIcon />}
          endIcon={<ArrowOutwardIcon />}
          onClick={handleEmailButtonClick}
          variant="outlined"
        >
          Send Email
        </Button>
        <Button
          className="button"
          startIcon={<LinkedInIcon />}
          endIcon={<ArrowOutwardIcon />}
          href="https://www.linkedin.com/in/karrar-esbeyajani-23a67626a/"
          target="_blank"
          variant="outlined"
        >
          LinkedIn
        </Button>
        <Button
          className="button"
          startIcon={<GitHubIcon />}
          endIcon={<ArrowOutwardIcon />}
          href="https://github.com/KEYAJANI"
          target="_blank"
          variant="outlined"
        >
          GitHub
        </Button>
        <Button
          className="button"
          startIcon={<InstagramIcon />}
          endIcon={<ArrowOutwardIcon />}
          href="https://www.instagram.com/esbeyajani/"
          target="_blank"
          variant="outlined"
        >
          Instagram
        </Button>
      </Stack>
      <Grid
        className="contactForm contactFormForDesktopSizeScreen"
        container
        spacing={1}
      >
        <Grid xs={12}>
          <Button
            className="button divderBetweenButtons"
            id="copyEmailButton"
            style={{ backgroundColor: "#c8c8c875" }}
            variant="text"
          >
            <CopyEmailButton />
          </Button>
          <Divider className="divder button divderBetweenButtons">
            <Chip label="Or" size="small" />
          </Divider>
        </Grid>
        <Grid xs={6}>
          <Button
            className="button"
            style={{ marginBottom: "20px" }}
            startIcon={<MailIcon />}
            endIcon={<ArrowOutwardIcon />}
            onClick={handleEmailButtonClick}
            variant="outlined"
          >
            Send Email
          </Button>
        </Grid>
        <Grid xs={6}>
          <Button
            className="button"
            style={{ marginBottom: "20px" }}
            startIcon={<GitHubIcon />}
            endIcon={<ArrowOutwardIcon />}
            href="https://github.com/KEYAJANI"
            target="_blank"
            variant="outlined"
          >
            GitHub
          </Button>
        </Grid>

        <Grid xs={6}>
          <Button
            className="button"
            startIcon={<LinkedInIcon />}
            endIcon={<ArrowOutwardIcon />}
            href="https://www.linkedin.com/in/karrar-esbeyajani-23a67626a/"
            target="_blank"
            variant="outlined"
          >
            LinkedIn
          </Button>
        </Grid>
        <Grid xs={6}>
          <Button
            className="button"
            startIcon={<InstagramIcon />}
            endIcon={<ArrowOutwardIcon />}
            href="https://www.instagram.com/esbeyajani/"
            target="_blank"
            variant="outlined"
          >
            Instagram
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactForm;
