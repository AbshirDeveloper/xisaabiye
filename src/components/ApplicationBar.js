import React, { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuIcon from "@material-ui/icons/Menu";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";

class ApplicationBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar
        position="absolute"
        className={clsx(
          this.props.classes.appBar,
          this.props.open && this.props.classes.appBarShift
        )}
      >
        <Toolbar className={this.props.classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={this.props.handleDrawerOpen}
            className={clsx(
              this.props.classes.menuButton,
              this.props.open && this.props.classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={this.props.classes.title}
          >
            Application Bar
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default ApplicationBar;
