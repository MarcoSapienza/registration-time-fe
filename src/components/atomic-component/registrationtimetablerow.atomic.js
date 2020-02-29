import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default class RegistrationTimeTableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.project[0].name}</td>
                <td>{this.props.obj.start}</td>
                <td>{this.props.obj.end}</td>
                <td>{this.props.obj.description}</td>
                <td>
                    <Link className="edit-link" to={"/edit-student/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}
