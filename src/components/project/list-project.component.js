import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import ProjectTableRow from "../atomic-component/projecttablerow.atomic";
import Project from "../../api/resources/project.resource";

export default class ListProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        let project = new Project();
        project.getAllProjects((response) => {
            this.setState({projects: response});
        }, (error) =>{
            console.log("Error on retrieve the projects")

        })
    }

    DataTable() {
        return this.state.projects.map((res, i) => {
            return <ProjectTableRow obj={res} key={i} />;
        });
    }

    render() {
        return (<div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Customer</th>
                    <th>Hourly rate</th>
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
