import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Project from "../../api/resources/project.resource";
import Customer from "../../api/resources/customer.resource";
import CustomerSelect from "../atomic-component/customerselect.atomic";

export default class CreateProject extends Component {

    constructor(props) {
        super(props);

        // Setting up functions
        this.onChangeProjectName = this.onChangeProjectName.bind(this);
        this.onChangeProjectAmountPerHour = this.onChangeProjectAmountPerHour.bind(this);
        this.onChangeProjectCompleted = this.onChangeProjectCompleted.bind(this);
        this.setProjectCustomerId = this.setProjectCustomerId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            name: '',
            amountperhour: '',
            completed: false,
            customer: '',

        }
    }

    setProjectCustomerId(customerId) {
        this.setState({customer: customerId})
    }

    onChangeProjectName(e) {
        this.setState({name: e.target.value})
    }

    onChangeProjectAmountPerHour(e) {
        this.setState({amountperhour: e.target.value})
    }

    onChangeProjectCompleted(e) {
        this.setState({completed: e.target.checked})
    }

    onSubmit(e) {

        e.preventDefault();

        let project = new Project(this.state.name, this.state.amountperhour, this.state.completed, this.state.customer,);

        project.sendNewProject((response) => {
            console.log("Result on create customer component: ", response);
        }, (error) => {
            console.log("Error on create customer component: ", error);
        });

        this.setState({name: '', amountperhour: '', completed: ''})

    }


    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form>

                        <CustomerSelect setProjectCustomerId={this.setProjectCustomerId}/>

                        <Row>
                            <Col>
                                <Form.Group controlId="Name">
                                    <Form.Label>Project Name</Form.Label>
                                    <Form.Control type="text" value={this.state.name} onChange={this.onChangeProjectName}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="fiscalCode">
                                    <Form.Label>Hourly rate</Form.Label>
                                    <Form.Control type="text" value={this.state.amountperhour}
                                                  onChange={this.onChangeProjectAmountPerHour}/>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                    <Form.Check onChange={this.onChangeProjectCompleted}
                                        type='checkbox'
                                        id='default-checkbox'
                                        label='Checkbox'
                                        />
                            </Col>
                        </Row>

                        <Button variant="danger" size="lg" block="block" type="submit">
                            Create Project
                        </Button>
                    </Form>
                </Form>
            </div>
        );
    }
}
