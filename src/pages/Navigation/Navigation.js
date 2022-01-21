import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "./../../Hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();

  return (
    <>
     <header>
        <div className="container">
          <div className="row">
            <div className="py-4">
              <Navbar
                fixed="top"
                collapseOnSelect
                expand="lg"
                className="navLink"
              >
                <Container>
                  <Navbar.Brand>
                    <img
                      src="/images/logo.png"
                      alt="images"
                      className=" img-fluid logo"
                    />
                  </Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className=" justify-content-end align-items-center">
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
                    <Nav.Link>
                        <button onClick={logOut}>LogOut</button>
                    </Nav.Link>
                    ) : (
                      <NavLink to="/login">
                        <button>Login</button>
                      </NavLink>
                    )}

                    <Nav.Link className="text-success text-decoration-underline">
                      {user?.displayName}
                    </Nav.Link>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              <br />
            </div>
          </div>
        </div>
        </header>
    </>
  );
};

export default Navigation;
