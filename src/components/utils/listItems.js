import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import AssignmentIcon from "@material-ui/icons/Assignment";

export const mainListItems = [
  {
    id: 0,
    type: "ListItem",
    name: "Dashboard",
    Icon: <DashboardIcon />
  },
  {
    id: 1,
    type: "ListItem",
    name: "Orders",
    Icon: <ShoppingCartIcon />
  },
  {
    id: 2,
    type: "ListItem",
    name: "Customers",
    Icon: <PeopleIcon />
  },
  {
    id: 3,
    type: "divider"
  },
  {
    id: 4,
    type: "ListSubheader",
    name: "Saved reports"
  },
  {
    id: 5,
    type: "ListItem",
    name: "Current month",
    Icon: <AssignmentIcon />
  },
  {
    id: 6,
    type: "ListItem",
    name: "Last quarter",
    Icon: <AssignmentIcon />
  },
  {
    id: 7,
    type: "ListItem",
    name: "Year-end sale",
    Icon: <AssignmentIcon />
  }
];
