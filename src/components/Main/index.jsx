import { Component } from "react";
import About from "../About";
import Home from "../Home";

export default class Main extends Component {
  render() {
    return <div>{this.props.page === "Home" ? <Home /> : <About />}</div>;
  }
}
