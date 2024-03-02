import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Dropdown from "react-bootstrap/Dropdown";
import {Link } from "react-router-dom";


function NavScrollExample() {  
  return (
    <Navbar expand="sm" className="bg-body-tertiary nav">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#Home" className='content1'><a href="/Homepage"className='anchors'>Home</a></Nav.Link>
            <Dropdown>
              <Dropdown.Toggle id="dropdown" variant='none'>
                <a href="/Categories"className='anchors'>Categories</a>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1 ">Birthday Gifts</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Anniversary Gifts</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Wedding Gifts</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Friends Gifts</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Family Gifts</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Kids Gift</Dropdown.Item>
                <Dropdown.Item href="#/action-3"> Gifts</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Handmade Gifts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#notifications" className='content'>Notifications</Nav.Link>
            <Nav.Link href="#Account" className='content'><Link to="/Accounts" className='anchors'>Account</Link></Nav.Link>
            <NavDropdown title="Shop" id="navbarScrollingDropdown" className='content'>
              <NavDropdown.Item href="#action3">diwali gifts</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                teddy
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                holi gifts
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2" className='content'>Offers</Nav.Link>
            <Nav.Link href="#action2" className='content'>Gifts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
  )
}

export default NavScrollExample;