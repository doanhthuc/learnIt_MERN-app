import React, { useContext } from 'react';
import { Button, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link } from 'react-router-dom';
import learnItLogo from '../../assets/logo.svg';
import logoutIcon from '../../assets/logout.svg';
import { AuthContext } from '../../contexts/AuthContext';

const NavbarMenu = () => {
    const {
        authState: {
            user: { username },
        },
        logoutUser,
    } = useContext(AuthContext);

    const logout = () => logoutUser();
    return (
        <Navbar expand="lg" bg="primary" variant="dark" className="shadow">
            <NavbarBrand className="font-weight-bolder text-white">
                <img
                    src={learnItLogo}
                    alt="learnItLogo"
                    width="32"
                    height="32"
                    className="mr-2"
                />
                LearnIt
            </NavbarBrand>
            <NavbarToggle aria-controls="basic-navbar-nav" />
            <NavbarCollapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink
                        className="font-weight-bolder text-white"
                        to="/dashboard"
                        as={Link}
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        className="font-weight-bolder text-white"
                        to="/about"
                        as={Link}
                    >
                        About
                    </NavLink>
                </Nav>

                <Nav>
                    <NavLink className="font-weight-bolder text-white" disabled>
                        Welcome {username}
                    </NavLink>
                    <Button
                        variant="secondary"
                        className="font-weight-bolder text-white"
                        onClick={logout}
                    >
                        <img
                            src={logoutIcon}
                            alt="logoutIcon"
                            width="32"
                            height="32"
                            className="mr-2"
                        />
                        Logout
                    </Button>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    );
};

export default NavbarMenu;
