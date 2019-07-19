import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";

import clsx from "clsx";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { mainListItems } from "./utils/listItems";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();

    this.state = {
      open: true
    };
    this.menu = mainListItems.map(item => item.name);

    this.history.listen(location => {
      // update content page when back button is clicked
      this.props.changeUrl(location.pathname.slice(1));
      location.pathname.slice(1) ||
        this.props.changeUrl(this.menu[0].toLowerCase());
    });

    this.handleMenuItemClicked = this.handleMenuItemClicked.bind(this);
  }

  componentDidMount() {
    // update content page when page is refreshed button is clicked
    this.history.location.pathname.slice(1) &&
      this.props.changeUrl(this.history.location.pathname.slice(1));
  }

  handleMenuItemClicked(newValue) {
    this.setState({ value: newValue });
    this.history.push(this.menu[newValue].toLowerCase(), {
      some: "state"
    });

    // update content page when navigatoin button is clicked
    this.props.changeUrl(this.history.location.pathname.slice(1));
  }

  render() {
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(
            this.props.classes.drawerPaper,
            !this.props.open && this.props.classes.drawerPaperClose
          )
        }}
        open={this.props.open}
      >
        <div className={this.props.classes.toolbarIcon}>
          <IconButton onClick={this.props.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <div>
            {mainListItems.map(item => {
              if (item.type === "ListItem") {
                return (
                  <ListItem
                    key={item.id}
                    button
                    onClick={() => this.handleMenuItemClicked(item.id)}
                  >
                    <ListItemIcon children={item.Icon} />
                    <ListItemText primary={item.name} />
                  </ListItem>
                );
              } else if (item.type === "ListSubheader") {
                return (
                  <ListSubheader key={item.id} inset>
                    {item.name}
                  </ListSubheader>
                );
              } else if (item.type === "divider") {
                return <Divider key={item.id} />;
              }
            })}
          </div>
        </List>
      </Drawer>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(
  mapStateToProps,
  {
    changeUrl: url => {
      return {
        type: "url",
        payload: url
      };
    }
  }
)(Navigation);
