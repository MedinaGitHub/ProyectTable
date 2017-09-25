import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";

//  <NavbarToggler right onClick={this.toggle} />
//<Collapse isOpen={this.state.isOpen} navbar>
export default () => {

  return (

    <div>
      <Navbar color="faded" light toggleable>
        <NavbarBrand to="/">Mesas ResIt</NavbarBrand>
        <Collapse  navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink  tag={Link} to="/ListContainer">Ver Mesas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to ="/FormContainer">Fromulario</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  tag={Link} to="/Dashboard">Dashboard</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

  )


}
