import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import CreateCustomer from "./components/customer/create-customer.component";
import ListCustomer from "./components/customer/list-customer.component";
import CreateProject from "./components/project/create-project.component";
import ListProject from "./components/project/list-project.component";
import CreateRegistration from "./components/registration-time/create-registration.component";

function App() {

  return (<Router>
    <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-customer"} className="nav-link">
                Freelancer Registration Time
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">

              <NavDropdown title="Registration Time" id="registrationtime-nav-dropdown">
                <NavDropdown.Item href="/create-registration">Create Registration</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Customer" id="customer-nav-dropdown">
                <NavDropdown.Item href="/create-customer">Create Customer</NavDropdown.Item>
                <NavDropdown.Item href="/list-customer">Customers List</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Project" id="project-nav-dropdown">
                <NavDropdown.Item href="/create-project">Create Project</NavDropdown.Item>
                <NavDropdown.Item href="/list-project">Projects List</NavDropdown.Item>
              </NavDropdown>

              {/*<Nav>*/}
              {/*  <Link to={"/create-project"} className="nav-link">*/}
              {/*    Customers List*/}
              {/*  </Link>*/}
              {/*</Nav>*/}

            </Nav>


          </Container>
        </Navbar>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateCustomer} />
                <Route path="/create-customer" component={CreateCustomer} />
                <Route path="/list-customer" component={ListCustomer} />
                <Route path="/create-project" component={CreateProject} />
                <Route path="/list-project" component={ListProject} />
                <Route path="/create-registration" component={CreateRegistration} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);

}

export default App;
