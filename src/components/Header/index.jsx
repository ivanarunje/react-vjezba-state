import { Component } from "react";

class Header extends Component {
  render() {
    return <button onClick={this.props.pageHandler}>Promijeni stanje</button>;
  }
}

export default Header;
