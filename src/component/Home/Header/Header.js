
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const {user,logOut} = useAuth();
    return (
            <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="#home"><span className="text-danger">Tour-X AGANCY</span></Navbar.Brand>

            <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/service">Service</Nav.Link>
                    <Nav.Link as={Link} to="/addService">AddService</Nav.Link>
                    {/* <Nav.Link as={Link} to="/updateService">UpdateService</Nav.Link> */}
                    
                    { user?.email?
                        <div className="d-flex">
                            
                            <Nav.Link as={Link} to="/myOrder">MyOrder</Nav.Link>
                            <Nav.Link as={Link} to="/manageOrder">ManageOrder</Nav.Link>
                            <button onClick={logOut} className='btn btn-danger'>Logout</button>
                        </div>
                        :
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                        
                    
                        
                    
                <Navbar.Text>
                    Signed in as: <a href="#login">{user.displayName}</a>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
            </>

    );
};

export default Header;