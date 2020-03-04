import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RegistrationTimeTableRow extends Component {
    render() {

        const endDate= new Date(this.props.obj.end);
        const startDate= new Date(this.props.obj.start);

        const difference = Math.abs(endDate.getTime() - startDate.getTime()) / 3600000;
        return (
            <tr>
                <td>{this.props.obj.project[0].name}</td>
                <td>{this.props.obj.start}</td>
                <td>{this.props.obj.end}</td>
                <td>{difference}</td>
                <td>{this.props.obj.project[0].amountperhour}</td>
                <td>{difference * this.props.obj.project[0].amountperhour}</td>
                <td>{this.props.obj.description}</td>
                <td>
                    <Link className="edit-link" to={"/edit-student/" + this.props.obj._id}>
                        Edit
                    </Link>
                </td>
            </tr>
        );
    }
}
