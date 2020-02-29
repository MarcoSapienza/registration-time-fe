import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProjectSelect from "../atomic-component/projectselect.atomic";
import RegistrationTime from "../../api/resources/registrationtime.resource";
import Table from "react-bootstrap/Table";
import RegistrationTimeTableRow from "../atomic-component/registrationtimetablerow.atomic";
export default class CreateRegistration extends Component {

    constructor(props) {
        super(props)

        // Setting up functions
        this.setRegistrationTimeProjectId = this.setRegistrationTimeProjectId.bind(this);
        this.onChangeStartTimeProject = this.onChangeStartTimeProject.bind(this);
        this.onChangeEndTimeProject = this.onChangeEndTimeProject.bind(this);
        this.onChangeEndTimeProject = this.onChangeEndTimeProject.bind(this);
        this.onChangeDescriptionProject = this.onChangeDescriptionProject.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            project: '',
            start: '',
            end: '',
            description: '',
            registrationTimes: []
        }
    }

    componentDidMount() {
        let registrationTime = new RegistrationTime();
        registrationTime.getAllRegistrationTime((response) =>{
            this.setState({registrationTimes: response})
        }, (error) =>{
            console.log("Error on getAllRegistratioTime");
        })
    }

    setRegistrationTimeProjectId(projectId){
        this.setState({project: projectId})
    }

    onChangeStartTimeProject(e){
        this.setState({start: e.target.value});
    }

    onChangeEndTimeProject(e){
        this.setState({end: e.target.value});
    }

    onChangeDescriptionProject(e){
        this.setState({description: e.target.value});
    }

    DataTable() {
        return this.state.registrationTimes.map((res, i) => {
            return <RegistrationTimeTableRow obj={res} key={i} />;
        });
    }

    onSubmit(e) {

        e.preventDefault()

        let registrationTime = new RegistrationTime(this.state.project, this.state.start, this.state.end, this.state.description);

        registrationTime.sendNewRegistrationTime((response) => {
            console.log("Result on create registration component: ", response);
        }, (error) => {
            console.log("Error on create registration component: ", error);
        })

        this.setState({start: '', end: '', description: ''});

    }


    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form>
                        <Row>
                            <Col>
                                <ProjectSelect setRegistrationTimeProjectId={this.setRegistrationTimeProjectId}/>
                            </Col>
                            <Col>
                                <Form.Group controlId="startDate">
                                    <Form.Label>Start Date</Form.Label>
                                    <Form.Control type="datetime-local" value={this.state.start}
                                                  onChange={this.onChangeStartTimeProject}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="endDate">
                                    <Form.Label>End Date</Form.Label>
                                    <Form.Control type="datetime-local" value={this.state.end}
                                                  onChange={this.onChangeEndTimeProject}/>
                                </Form.Group>
                            </Col>
                        </Row>



                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="textarea" value={this.state.description}
                                          onChange={this.onChangeDescriptionProject}/>
                        </Form.Group>


                        <Button variant="danger" size="lg" block="block" type="submit">
                            Add New Registration
                        </Button>
                    </Form>
                </Form>
                <Form className='mt-5'>
                    <Form.Group controlId="registrationTimeTable">
                        <Container>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Project</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.DataTable()}
                        </tbody>
                    </Table>
                        </Container>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}
