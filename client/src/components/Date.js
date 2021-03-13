import React from "react";
import Moment from "react-moment";

Moment.globalFormat = "MMM D, YYYY";

export default class MyComponent extends React.Component {
  render() {
    return <Moment local />;
  }
}
