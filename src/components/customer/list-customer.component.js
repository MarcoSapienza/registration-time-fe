import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import CustomerTableRow from "../atomic-component/customertablerow.atomic";
import Customer from "../../api/resources/customer.resource";

export default class ListCustomer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        let customer = new Customer();
        customer.getAllCustomers((response) => {
            this.setState({customers: response});
        }, (error) =>{
            console.log("Error on retrieve the customers")

        })
    }

    DataTable() {
        return this.state.customers.map((res, i) => {
            return <CustomerTableRow obj={res} key={i} />;
        });
    }

    render() {
        return (<div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>fiscalCode</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.DataTable()}
                </tbody>
            </Table>
        </div>);
    }
}
