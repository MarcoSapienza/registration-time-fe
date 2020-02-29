import {post} from '../api';

export default class Operation {

    constructor(name, bankroll, operation_type, runners) {
        if(arguments.length) {
            //Check if constructor has got parameters
            this.name = name;
            this.bankroll = bankroll;
            this.operation_type = operation_type;
            this.runners = runners;
        }


    }

    getAllOddsFromOperation( callback, errorcallback){

        let requestBody = {
            name: this.name,
            bankroll: this.bankroll,
            operation_type: this.operation_type,
            runners: this.runners
        }
        post('/koi/oddsselection',  requestBody,(response)=>{
            callback(response.data);
        },(error) => {errorcallback(error)});

    }    

}