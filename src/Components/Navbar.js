import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from "reactstrap";
// import { Link } from "react-router";
// import List from "../Components/List";
import Presentation from "../Components/Presentation";
import OmdbAPI from "../Components/OmdbAPI";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar color="secondary" light expand="md">
            <NavbarBrand href="/">Home</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/list">List</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/mohammadali-bacha/blablamovie">
                    GitHub
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Switch>
            {/* <Route path="/list" component={List} /> */}
            <Route path="/list" component={OmdbAPI} />
            <Route path="/" component={Presentation} />
          </Switch>
        </div>
      </Router>
    );
  }
}

          // <OmdbAPI />;
