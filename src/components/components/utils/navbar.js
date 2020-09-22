import React from 'react'
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Navigation()
{
    return (
        <Navbar bg="dark" variant='dark'expand="lg">
  <Navbar.Brand href="#home">College of Winterhold</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Link to='/'><Nav.Link href="#home">Home</Nav.Link></Link>
    <Link to='/courses'><Nav.Link href="#courses">Courses</Nav.Link></Link>
      <NavDropdown title="Schools" id="basic-nav-dropdown">
      <Link to='/school/1'><NavDropdown.Item href="#school/1">Alchemy</NavDropdown.Item></Link>
      <Link to='/school/2'> <NavDropdown.Item href="#school/2">Destruction</NavDropdown.Item></Link>
      <Link to='/school/3'><NavDropdown.Item href="#school/3">Restoration</NavDropdown.Item></Link>
        <NavDropdown.Divider />
        <Link to='/school/4'> <NavDropdown.Item href="#school/4">Necromancy</NavDropdown.Item></Link>
      </NavDropdown>
      <Link to='/faculty'><Nav.Link href="#faculty">Faculty</Nav.Link></Link>
    </Nav>
    <Form inline> 
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}