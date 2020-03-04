import {get, post} from '../api';

export default class Project {

    constructor(name, amountperhour, completed, customer) {
        if(arguments.length) {
            //Check if constructor has got parameters
            this.name = name;
            this.amountperhour = amountperhour;
            this.completed = completed;
            this.customer = customer;
        }
    }

    sendNewProject(callback, errorCallback){

        let bodyRequest = {
            name:  this.name,
            amountperhour: this.amountperhour,
            completed:  this.completed,
            customer: this.customer
        };
        console.log("Bodyrequest: ",bodyRequest);

        post('https://registrationtime-be.herokuapp.com/api/project/new', bodyRequest, response => {

            console.log("response from send new project: ",response);
            callback(response);

        }, error => {

            errorCallback(error);

        })
    }

    getAllProjects(callback, errorCallback){
        get('https://registrationtime-be.herokuapp.com/api/project/list',(response)=>{
            callback(response.data);
        },(error) => {errorCallback(error)});
    }
}
