import {post} from '../api';

const NATIVE = "NATIVE";
const EXCHANGE = "EXCHANGE";
const CALCULATED = "CALCULATED";

export default class Action {


     constructor(owners, odd_id, amount, scheduled_time, operation, user_odd_value,type) {
        if(arguments.length) {
            //Check if constructor has got parameters
            this.owners = owners;
            this.odd_id = odd_id;
            this.amount= amount;
            this.scheduled_time = scheduled_time;
            this.operation = operation;
            this.user_odd_value = user_odd_value;
            this.type = type;
        }


    }
    static createCalculatedAction(owners, odd_id, amount, scheduled_time, operation){
        return new Action(owners, odd_id, amount, scheduled_time, operation, null,"CALCULATED");
    }
    static createNativeAction(owners, odd_id, amount, scheduled_time){
        return new Action(owners, odd_id, amount, scheduled_time, null, null,"NATIVE");
    }
    static createExchangeAction(owners, odd_id, amount, scheduled_time, user_odd_value){
        return new Action(owners, odd_id, amount, scheduled_time, null, user_odd_value,"EXCHANGE");
    }

    sendAction(callback, errorcallback){

        let requestBody = {
            owners: this.owners,
            odd_id: this.odd_id,
            amount: this.amount,
            scheduled_time: this.scheduled_time
        };
        switch (this.type) {
            case NATIVE:

                post('/koi/actions', requestBody,(response)=>{
                    callback(response);
                },(error) => {
                    errorcallback(error)});
                break;
            case EXCHANGE:
                requestBody.user_odd_value = this.user_odd_value;

                post('/koi/actions?exchange=true', requestBody,(response)=>{
                    callback(response);
                },(error) => {
                    errorcallback(error)});
                break;
            case CALCULATED:
                requestBody.operation = this.operation;

                post('/koi/actions?calculated=true', requestBody,(response)=>{
                    callback(response);
                },(error) => {
                    errorcallback(error)});
                break;



        }

    }


}