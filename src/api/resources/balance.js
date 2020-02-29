import {post} from '../api';

export default class Balance {
    constructor(actionGroup){
        if(arguments.length) {
            this.actionGroup = actionGroup;
        }
    }

    getBalanceData(callback, errorCallback){
        let requestBody = {
            actionGroup: this.actionGroup
        };

        post('/koi/balance', requestBody, (balanceData) => {
            callback(balanceData);
        }, error => {
            errorCallback(error);
        })
    }
}