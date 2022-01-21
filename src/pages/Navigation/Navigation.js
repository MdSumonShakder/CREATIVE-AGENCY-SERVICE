import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from './../../Hooks/useAuth';

const Navigation = () => {
  const { user, logOut } = useAuth();



  return (
    <>
      <div className="container-fluid color">
        <div className="container">
          <div className="row">
            <div className="py-3">
              <Navbar fixed="top" collapseOnSelect expand="lg">
                <Container>
                  <Navbar.Brand>
                    <img
                      src="/images/logo.png"
                      alt="images"
                      className=" img-fluid logo"
                    />
                  </Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className=" justify-content-end align-content-center text-white">
                    <Nav.Link as={HashLink} to="/home#banner">
                      Home
                    </Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services">
                      Services
                    </Nav.Link>
                    <Nav.Link as={HashLink} to="/home#work">
                      MyWorks
                    </Nav.Link>
                    <Nav.Link as={HashLink} to="/home#client">
                      ClientFeedback
                    </Nav.Link>
                    <Nav.Link as={HashLink} to="/home#contact">
                      Contact
                    </Nav.Link>
                    <Nav.Link as={HashLink} to="/home#footer">
                      Footer
                    </Nav.Link>
                    {user?.email ? (
              <button className="sty" onClick={logOut}>
                LogOut
              </button>
            ) : (
              <NavLink to="/login">
                <button className="sty">Login</button>
              </NavLink>
            )}

            <Nav.Link
              className="text-success  mx-3 text-decoration-underline"
            >
              {user?.displayName}
            </Nav.Link>


                  </Navbar.Collapse>
                </Container>
              </Navbar>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
