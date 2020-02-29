import {get, post} from '../api';

export default class Runner {

    constructor() {
    }

    getAllRunners(callback, errorcallback){
        get('/koi/runners', (response)=>{
            callback(response.data);
        },(error) => {errorcallback(error)});
    }

    getRunnerAmounts(data, matchID, callback, errorCallback) {

        post('/koi/runnerstotalamount?match='+matchID, data, response =>{
            callback(response.data);
        }, error => {
            errorCallback(error);
        });

    }
}