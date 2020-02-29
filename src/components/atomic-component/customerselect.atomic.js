import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Customer from "../../api/resources/customer.resource";

export default class CustomerSelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers:[]
        }
        this.onChangeCustomerSelect= this.onChangeCustomerSelect.bind(this);
    }

    onChangeCustomerSelect(e){
        this.props.setProjectCustomerId(e.target.value);
    }
    componentDidMount() {
        let customer = new Customer();
        customer.getAllCustomers((response) => {
            this.setState({customers: response});
        }, (error) =>{
            console.log("Error on retrieve the customers")

        })
    }

    render() {
        return (
            <Form.Group controlId="customer-controlselect">
                <Form.Label>Customers</Form.Label>
                <Form.Control as="select" onChange={this.onChangeCustomerSelect}>
                    {
                        this.state.customers.map((option, index) => {
                            return (<option key={index} value={option._id}>{option.name}</option>)
                        })
                    }
                </Form.Control>
            </Form.Group>
        );
    }
}
