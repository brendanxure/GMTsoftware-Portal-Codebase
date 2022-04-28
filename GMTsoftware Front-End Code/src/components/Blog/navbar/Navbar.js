import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import LaptopIcon from "@mui/icons-material/Laptop";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    Navbar: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          "/Blog",
          "/fullstackblog",
          "/Pythonblog",
          "/UIUXblog",
          "/Flutterblog",
        ].map((text, index) => (
          <ListItemButton component="a" href={text}>
            <ListItemIcon>
              {index % 2 == 0 ? <LaptopIcon /> : <DeviceHubIcon />}
            </ListItemIcon>

            <ListItemText primary={text} />
            {/* {[
              
            ].map((text) => (
              <ListItemButton href={text}></ListItemButton>
            ))} */}
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="toggle">
      {["Blog Menu"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            variant="contained"
            color="error"
            onClick={toggleDrawer(anchor, true)}
          >
            {anchor}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
