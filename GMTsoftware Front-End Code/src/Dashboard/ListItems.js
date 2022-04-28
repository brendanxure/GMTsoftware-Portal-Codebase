import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import DashboardIcon from "@mui/icons-material/Dashboard";

import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";

import AddTaskIcon from "@mui/icons-material/AddTask";
import { NavLink } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <NavLink
      to="/Dashboard"
      exact
      style={{ color: "red", textDecoration: "none", fontSize: "20" }}
    >
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </NavLink>
    <NavLink
      to="/Tasks"
      style={{ color: "red", textDecoration: "none", fontSize: "20" }}
    >
      <ListItemButton>
        <ListItemIcon>
          <AddTaskIcon />
        </ListItemIcon>
        <ListItemText primary="Task" />
      </ListItemButton>
    </NavLink>
    {/* <NavLink
      to="/Profile"
      style={{ color: "red", textDecoration: "none", fontSize: "20" }}
    >
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
    </NavLink> */}
    <NavLink
      to="/Certificates"
      style={{ color: "red", textDecoration: "none", fontSize: "20" }}
    >
      <ListItemButton>
        <ListItemIcon>
          <CalendarViewMonthIcon />
        </ListItemIcon>
        <ListItemText primary="Certificate" />
      </ListItemButton>
    </NavLink>
  </React.Fragment>
);
