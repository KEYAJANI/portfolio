import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Divider } from "@mui/material";
import { Link } from "react-scroll";

export default function Dropdownmenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="dropMenu">
      <Button
        style={{ color: "black" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        style={{ backgroundColor: "#675e5e4e" }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="popUpMenu">
          <MenuItem>
            <Link
              onClick={handleClose}
              to="About"
              spy={true}
              smooth={true}
              offset={-40}
              duration={800}
            >
              About
            </Link>
          </MenuItem>
          <Divider light />
          <MenuItem>
            <Link
              onClick={handleClose}
              to="/"
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
            >
              Projects
            </Link>
          </MenuItem>
          <Divider light />
          <MenuItem>
            <Link
              onClick={handleClose}
              to="Contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={1200}
            >
              Contact
            </Link>
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
