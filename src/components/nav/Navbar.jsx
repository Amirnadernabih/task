import React from 'react';
import './Navbar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import first from './icons/1.png';
import second from './icons/2.png';
import third from './icons/3.png';
import fourth from './icons/4.png';
import fifth from './icons/5.png';
import sixth from './icons/6.png';
import seven from './icons/7.png';
import eight from './icons/8.png';
import nine from './icons/9.png';
import settings from './icons/Settings.png';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg"  className="navbar   bg-body-tertiary" style={{position: 'fixed',  height: '100%'}}>
      <Nav className="navchild m-0 flex-column align-items-center gap-3">
        <Nav.Link href="##">
          <img src={first} alt='' />
        </Nav.Link>
        <Nav.Link href="##">
          <img src={second} alt='' />
        </Nav.Link>
        <Nav.Link href="##">
          <img src={third} alt='' />
        </Nav.Link>
        <Nav.Link href="##">
          <img src={fourth} alt='' />
        </Nav.Link>
        <Nav.Link href="##">
          <img src={fifth} alt='' />
        </Nav.Link>
        <Nav.Link href="##">
          <img src={sixth} alt='' />
        </Nav.Link>
        <Nav.Link href="##">
          <img src={seven} alt='' />
        </Nav.Link>
        <Nav.Link href="##">
          <img src={eight} alt='' />
        </Nav.Link>
        <Nav.Link href="##">
          <img src={nine} alt='' />
        </Nav.Link>
      </Nav>
      <Nav className="navchild m-auto  align-items-center">
        <Nav.Link href="##">
          <img src={settings} alt='' />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default CollapsibleExample;






