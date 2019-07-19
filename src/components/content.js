import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Grid, Paper } from "@material-ui/core";
import PlainComponent from "./utils/plainComponent";

function componentGenerator(WrappedComponent, selectData) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: selectData
      };
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.PlainComponent = PlainComponent;
    this.MainComponent = componentGenerator(this.PlainComponent, {
      name: this.props.data.url
    });
  }

  render() {
    return (
      <main className={this.props.classes.content}>
        <div className={this.props.classes.appBarSpacer} />
        <Container maxWidth="lg" className={this.props.classes.container}>
          <Grid container spacing={3}>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={this.props.classes.paper}>
                <this.MainComponent />
                {/* {this.props.data.url} */}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
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
  {}
)(Content);
