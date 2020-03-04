import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Project from "../../api/resources/project.resource";

export default class ProjectSelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects:[]
        }
        this.onChangeProjectSelect= this.onChangeProjectSelect.bind(this);
    }

    onChangeProjectSelect(e){
        console.log("onChangeProjectSelect: ",e.target.value);
        this.props.setRegistrationTimeProjectId(e.target.value);
    }
    componentDidMount() {
        let project = new Project();
        project.getAllProjects((response) => {
            console.log("Response - Project: ",response);
            this.setState({projects: response})
        }, (error) => {
            console.log("Error on retrieve the projects")
        })
    }

    render() {
        return (
            <Form.Group controlId="customer-controlselect">
                <Form.Label>Projects</Form.Label>
                <Form.Control as="select" placeholder="Select a project" onChange={this.onChangeProjectSelect}>
                    {
                        this.state.projects.map((option, index) => {
                            return (<option key={index} value={option._id}>{option.name}</option>)
                        })
                    }
                </Form.Control>
            </Form.Group>
        );
    }
}
