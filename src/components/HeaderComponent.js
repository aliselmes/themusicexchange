import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        this.props.loginUser({username: this.username.value, password: this.password.value});
        event.preventDefault();
    }

    handleLogout() {
        this.props.logoutUser();
    }

    render() {
        return (
            <React.Fragment>

                <Navbar light sticky="top" expand="xl">
                    <div className="container">
                                    <NavbarBrand className="mr-5" href="/"><h2>The Music Exchange</h2></NavbarBrand>
                                    <NavbarToggler onClick={this.toggleNav} />
                                    <Collapse isOpen={this.state.isNavOpen} navbar>
                                        <Nav navbar>
                                            <NavItem>
                                                <NavLink className="nav-link" to="/home">
                                                    Home
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link" to="/geardirectory">
                                                    Browse Gear
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link" to="/musicians">
                                                    Find Musicians
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link" to="/gigs">
                                                    Gigs
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link" to="/instructors">
                                                    Instructors
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link" to="/aboutus">
                                                    About
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link" to="/contactus">
                                                    Contact Us
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                        <Nav className="ml-auto" navbar>
                                            <NavItem>
                                                { !this.props.auth.isAuthenticated 
                                                    ?
                                                    <Button outline onClick={this.toggleModal} id="login-btn">
                                                        <i className="fa fa-sign-in fa-lg" /> Login
                                                        {this.props.auth.isFetching 
                                                            ? <span className="fa fa-spinner fa-pulse fa-fw" />
                                                            : null
                                                        }
                                                    </Button>
                                                    :
                                                    <div>
                                                        <div className="navbar-text mr-3">{this.props.auth.user.username}</div>
                                                        <Button outline onClick={this.handleLogout} id="logout-btn">
                                                            <span className="fa fa-sign-out fa-lg"></span> Logout
                                                            {this.props.auth.isFetching 
                                                                ? <span className="fa fa-spinner fa-pulse fa-fw"/>
                                                                : null
                                                            }
                                                        </Button>
                                                    </div>
                                                }
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" 
                                        innerRef={input => this.remember = input}/> 
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        );
    }
}

export default Header;