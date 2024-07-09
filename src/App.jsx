import { Container, ListItem, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Dropdownmenu from "./Components/Dropdownmenu";
import Mainpage from "./Components/Mainpage";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Link } from "react-scroll";
function App() {
  return (
    <div
      className="body"
      style={{
        backgroundColor: "#ebebeb",
        borderRadius: "50px",
        height: "2200px",
        margin: "25px 10px",
        boxShadow: "0px 3px 10px rgb(0 0 0 / 0.2)",
        overflow: "hidden",
      }}
    >
      <Container style={{ fontFamily: "'Ubuntu', sans-serif" }} maxWidth="md">
        {/* ================================================== */}
        {/* ========  NAVBAR CONTAINER STARTS HERE =========== */}
        {/* ================================================== */}
        <div className="navbarComponent">
          <Grid container spacing={2}>
            <Grid xs={7}>
              <h2 style={{ fontWeight: "bold", cursor: "pointer" }}>
                <Link
                  style={{ color: "black" }}
                  to="Hero"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={800}
                >
                  Esbeyajani
                </Link>
              </h2>
            </Grid>
            <Grid xs={5}>
              <div className="navButtonsContainer">
                <Stack
                  direction={{ sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                  <ListItem style={{ width: "80px" }} className="navButtons">
                    <Link
                      style={{ color: "black" }}
                      to="About"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={800}
                    >
                      About
                    </Link>
                  </ListItem>
                  <ListItem style={{ width: "90px" }} className="navButtons">
                    <Link
                      style={{ color: "black" }}
                      q
                      to="/"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={1200}
                    >
                      Projects
                    </Link>
                  </ListItem>
                  <ListItem style={{ width: "90px" }} className="navButtons">
                    <Link
                      style={{ color: "black" }}
                      to="Contact"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={1500}
                    >
                      Contact
                    </Link>
                  </ListItem>
                </Stack>
              </div>
              <Dropdownmenu />
            </Grid>
          </Grid>
        </div>
        {/* ================================================== */}
        {/* =========  NAVBAR CONTAINER ENDS HERE ============ */}
        {/* ================================================== */}

        {/* ================================================== */}
        {/* =======  MAIN PAGE CONTAINER STARTS HERE ========= */}
        {/* ================================================== */}
        <Mainpage />
        {/* ================================================== */}
        {/* ========  MAIN PAGE CONTAINER ENDS HERE ========== */}
        {/* ================================================== */}

        {/* ================================================== */}
        {/* ========  ABOUT ME CONTAINER STARTS HERE ========= */}
        {/* ================================================== */}
        <About />
        {/* ================================================== */}
        {/* =========  ABOUT ME CONTAINER ENDS HERE ========== */}
        {/* ================================================== */}

        {/* ================================================== */}
        {/* ========  CONTACT ME CONTAINER STARTS HERE ======= */}
        {/* ================================================== */}
        <Contact />
        
      </Container>
    </div>
  );
}

//chunk-JDYVG6BI.js:7032 Uncaught SyntaxError: Export 'import_react3' is not defined in module
export default App;
// https://ibb.co/9GCJyWX
// https://ibb.co/5vJYXyW
// karrars photo https://ibb.co/jW9TX8J