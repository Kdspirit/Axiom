import React from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap';
import CallIcon from '@material-ui/icons/Call';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import flag from '../../Assets/ind.png'
import './Navbar.css'

const NavBar = () => {
    return (
        <section>
            <Navbar style={{background: '#2fb1ff'}} expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="Logo-wrapper"><span className="Axiom">Axiom</span> <span className="ship-manager">SHIP MANAGER</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div className="navbar-collapse">
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><CallIcon style={{fontSize: '2rem',color: 'white'}}/></Nav.Link>
                        <Nav.Link href="#link"><AccountCircleIcon style={{fontSize: '2rem',color: 'white'}}/></Nav.Link>
                        <Nav.Link href="#nation"><img src={flag} alt="" style={{height: '2rem', width: '2rem',background: 'skyblue'}} /></Nav.Link>
                        <Nav.Link className="quote">QUICK QUOTE</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </section>
    )
}

export default NavBar
