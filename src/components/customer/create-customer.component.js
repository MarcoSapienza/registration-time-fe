import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Customer from '../../api/resources/customer.resource';

export default class CreateCustomer extends Component {

    constructor(props) {
        super(props)

        // Setting up functions
        this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
        this.onChangeCustomerFiscalCode = this.onChangeCustomerFiscalCode.bind(this);
        this.onChangeCustomerVatNumber = this.onChangeCustomerVatNumber.bind(this);
        this.onChangeCustomerSocialName = this.onChangeCustomerSocialName.bind(this);
        this.onChangeCustomerAddress = this.onChangeCustomerAddress.bind(this);
        this.onChangeCustomerCap = this.onChangeCustomerCap.bind(this);
        this.onChangeCustomerCity = this.onChangeCustomerCity.bind(this);
        this.onChangeCustomerEmail = this.onChangeCustomerEmail.bind(this);
        this.onChangeCustomerPhone = this.onChangeCustomerPhone.bind(this);
        this.onChangeCustomerMobilePhone = this.onChangeCustomerMobilePhone.bind(this);
        this.onChangeCustomerNote = this.onChangeCustomerNote.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            name: '',
            fiscalCode: '',
            vatNumber: '',
            socialName: '',
            address: '',
            cap: '',
            city: '',
            email: '',
            phone: '',
            mobilePhone: '',
            note: ''
        }
    }

    onChangeCustomerName(e) {
        this.setState({name: e.target.value})
    }

    onChangeCustomerFiscalCode(e) {
        this.setState({fiscalCode: e.target.value})
    }

    onChangeCustomerVatNumber(e) {
        this.setState({vatNumber: e.target.value})
    }

    onChangeCustomerSocialName(e) {
        this.setState({socialName: e.target.value})
    }

    onChangeCustomerAddress(e) {
        this.setState({address: e.target.value})
    }

    onChangeCustomerCap(e) {
        this.setState({cap: e.target.value})
    }

    onChangeCustomerCity(e) {
        this.setState({city: e.target.value})
    }

    onChangeCustomerEmail(e) {
        this.setState({email: e.target.value})
    }

    onChangeCustomerPhone(e) {
        this.setState({phone: e.target.value})
    }

    onChangeCustomerMobilePhone(e) {
        this.setState({mobilePhone: e.target.value})
    }

    onChangeCustomerNote(e) {
        this.setState({note: e.target.value})
    }

    onSubmit(e) {

        e.preventDefault()

        console.log(`Customer successfully created!`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Fiscal Code: ${this.state.fiscalCode}`);

        let customer = new Customer(this.state.name, this.state.fiscalCode, this.state.vatNumber, this.state.socialName,
            this.state.address, this.state.cap, this.state.city, this.state.email, this.state.phone, this.state.mobilePhone, this.state.note);

        customer.sendNewCustomer((response) => {
            console.log("Result on create customer component: ", response);
        }, (error) => {
            console.log("Error on create customer component: ", error);
        });

        this.setState({name: '', email: '', fiscalCode: ''})

    }


    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form>
                        <Row>
                            <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={this.state.name} onChange={this.onChangeCustomerName}/>
                        </Form.Group>
                            </Col>
                            <Col>
                        <Form.Group controlId="fiscalCode">
                            <Form.Label>Fiscal Code</Form.Label>
                            <Form.Control type="text" value={this.state.fiscalCode}
                                          onChange={this.onChangeCustomerFiscalCode}/>
                        </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group controlId="vatNumber">
                            <Form.Label>VAT Number</Form.Label>
                            <Form.Control type="text" value={this.state.vatNumber}
                                          onChange={this.onChangeCustomerVatNumber}/>
                        </Form.Group>

                        <Form.Group controlId="socialName">
                            <Form.Label>Social Name</Form.Label>
                            <Form.Control type="text" value={this.state.socialName}
                                          onChange={this.onChangeCustomerSocialName}/>
                        </Form.Group>

                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" value={this.state.address}
                                          onChange={this.onChangeCustomerAddress}/>
                        </Form.Group>

                        <Form.Group controlId="cap">
                            <Form.Label>CAP</Form.Label>
                            <Form.Control type="text" value={this.state.cap} onChange={this.onChangeCustomerCap}/>
                        </Form.Group>

                        <Form.Group controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" value={this.state.city} onChange={this.onChangeCustomerCity}/>
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={this.state.email} onChange={this.onChangeCustomerEmail}/>
                        </Form.Group>

                        <Form.Group controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" value={this.state.phone} onChange={this.onChangeCustomerPhone}/>
                        </Form.Group>

                        <Form.Group controlId="mobilePhone">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type="text" value={this.state.mobilePhone}
                                          onChange={this.onChangeCustomerMobilePhone}/>
                        </Form.Group>

                        <Form.Group controlId="Name">
                            <Form.Label>Note</Form.Label>
                            <Form.Control type="text" value={this.state.note} onChange={this.onChangeCustomerNote}/>
                        </Form.Group>

                        <Button variant="danger" size="lg" block="block" type="submit">
                            Create Customer
                        </Button>
                    </Form>
                </Form>
            </div>
        );
    }
}
