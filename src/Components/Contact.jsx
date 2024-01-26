import { Grid } from "@mui/material";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="contactContainer" id="Contact">
      <Grid container spacing={2}>
        <Grid xs={3}>
          <h2
            className="aboutText contactText"
            style={{ fontSize: "32px", width: "350px" }}
          >
            Contact Me
          </h2>

          <h5
            className="contactContainerSupTitle"
            style={{
              fontSize: "16px",
              fontWeight: "300",
              color: "#52616B",
              width: "320px",
              lineHeight: "24px",
            }}
          >
            Have a question or just want to chat? Feel free to email me . Try
            finding me anywhere else at @esbeyajani
          </h5>
          <h3 className="contactSupText" style={{ display: "none" }}>
            About
          </h3>
        </Grid>
        <Grid xs={8}>
          <ContactForm email={"esbeyajanikarrar@gmail.com"} />
        </Grid>
      </Grid>
    </div>
  );
}
