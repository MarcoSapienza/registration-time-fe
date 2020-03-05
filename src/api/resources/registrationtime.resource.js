import {get, post} from '../api';

export default class RegistrationTime {

    constructor(projectId, start, end, description) {
        if(arguments.length) {
            //Check if constructor has got parameters
            this.project = projectId;
            this.start = start;
            this.end = end;
            this.description = description;
        }
    }

    sendNewRegistrationTime(callback, errorCallback){

        let bodyRequest = {
            project:  this.project,
            start: this.start,
            end:  this.end,
            description: this.description
        };
        console.log("Bodyrequest: ",bodyRequest);

        post('https://registrationtime-be.herokuapp.com/api/registrationtime/new', bodyRequest, response => {

            console.log("response from send new registration time: ",response);
            callback(response);

        }, error => {

            errorCallback(error);

        })
    }

    getAllRegistrationTime(callback, errorCallback){
        get('https://registrationtime-be.herokuapp.com/api/registrationtime/list',(response)=>{
            callback(response.data);
        },(error) => {errorCallback(error)});
    }
}
