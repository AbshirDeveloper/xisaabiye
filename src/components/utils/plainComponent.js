import React, { Component } from "react";
import { connect } from "react-redux";

class PlainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>{this.props.data && this.props.data.url}</div>;
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps)(PlainComponent);
