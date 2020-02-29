import {get, bodyGet, post} from '../api';

export default class Operativity {

    constructor(matchTypeId,operativityId) {
        if(arguments.length) {
            //Check if constructor has got parameters
            this.matchTypeId = matchTypeId;
            this.operativityId = operativityId;
        }
    }

    static createOperativityOnlyOperativityId(operativityId){
        return new Operativity(null,operativityId);
    }

    getOperativityFromMatchType(callback, errorcallback){
        get('/koi/operativities?matchTypeId=' + this.matchTypeId,(response)=>{
            callback(response.data);
        },(error) => {errorcallback(error)});
    }

    getOperativityDetails(callback, errorcallback){
        get('/koi/operativities/'+this.operativityId+"/",(response)=>{
            let operativityReturned = response.data;
            console.log("operativityReturned: ",operativityReturned);

            let operativityMask = {};
            operativityMask.OP_TYPE_RUNNER = {};

            operativityMask.OP_ID = operativityReturned.id;
            operativityMask.OP_NAME = operativityReturned.name;
            operativityMask.OP_AREA = operativityReturned.area;
            operativityMask.OP_OPERATION = operativityReturned.operation;
            operativityMask.OP_OUTCOME_COEFFICIENT = operativityReturned.area_outcome_coefficient;
            operativityMask.OP_GOALNUMBER_COEFFICIENT = operativityReturned.area_goalnumber_coefficient;
            operativityMask.OP_GOALDISTRIBUTION_COEFFICIENT = operativityReturned.area_goaldistribution_coefficient;

            if (operativityReturned.operation.includes("ubris")){
                operativityReturned.koirunners.map( runner => {
                    switch (runner.runner_tag) {
                        case "Win2":
                            operativityMask.UBRIS_RUNNER_WIN2_CODE = runner.koirunner.koi_code;
                            operativityMask.UBRIS_RUNNER_WIN2_TAG = runner.runner_tag;
                            break;
                        case "Win1":
                            operativityMask.UBRIS_RUNNER_WIN1_CODE = runner.koirunner.koi_code;
                            operativityMask.UBRIS_RUNNER_WIN1_TAG = runner.runner_tag;
                            break;
                        case "Void1":
                            operativityMask.UBRIS_RUNNER_VOID_CODE = runner.koirunner.koi_code;
                            operativityMask.UBRIS_RUNNER_VOID_TAG = runner.runner_tag;
                            break;
                    }
                })
            } else if (operativityReturned.operation.includes("dutching")){
                operativityReturned.koirunners.map( runner => {
                    switch (runner.runner_tag) {
                        case "Win1":
                            operativityMask.DUTCHING_RUNNER1_CODE = runner.koirunner.koi_code;
                            operativityMask.DUTCHING_RUNNER1_TAG = runner.runner_tag;
                            break;
                        case "Win2":
                            operativityMask.DUTCHING_RUNNER2_CODE = runner.koirunner.koi_code;
                            operativityMask.DUTCHING_RUNNER2_TAG = runner.runner_tag;
                            break;
                        case "Void1":
                            operativityMask.DUTCHING_RUNNER3_CODE = runner.koirunner.koi_code;
                            operativityMask.DUTCHING_RUNNER3_TAG = runner.runner_tag;
                            break;
                        case "Void2":
                            operativityMask.DUTCHING_RUNNER4_CODE = runner.koirunner.koi_code;
                            operativityMask.DUTCHING_RUNNER4_TAG = runner.runner_tag;
                            break;
                    }
                })
            } else if (operativityReturned.operation.includes("refund")) {
                operativityMask.OP_REFUND_PERCENTAGE = operativityReturned.refund_percentage;
                operativityReturned.koirunners.map( runner => {
                    switch (runner.runner_tag) {
                        case "Void1":
                            operativityMask.REFUND_RUNNER_VOID1_CODE = runner.koirunner.koi_code;
                            operativityMask.REFUND_RUNNER_VOID1_TAG = runner.runner_tag;
                            break;
                        case "Void2":
                            operativityMask.REFUND_RUNNER_VOID2_CODE = runner.koirunner.koi_code;
                            operativityMask.REFUND_RUNNER_VOID2_TAG = runner.runner_tag;
                            break;
                        case "Void3":
                            operativityMask.REFUND_RUNNER_VOID3_CODE = runner.koirunner.koi_code;
                            operativityMask.REFUND_RUNNER_VOID3_TAG = runner.runner_tag;
                            break;
                        case "Void4":
                            operativityMask.REFUND_RUNNER_VOID4_CODE = runner.koirunner.koi_code;
                            operativityMask.REFUND_RUNNER_VOID4_TAG = runner.runner_tag;
                            break;
                        case "Win1":
                            operativityMask.REFUND_RUNNER_WIN1_CODE = runner.koirunner.koi_code;
                            operativityMask.REFUND_RUNNER_WIN1_TAG = runner.runner_tag;
                            break;
                        case "Win2":
                            operativityMask.REFUND_RUNNER_WIN2_CODE = runner.koirunner.koi_code;
                            operativityMask.REFUND_RUNNER_WIN2_TAG = runner.runner_tag;
                            break;
                        case "Win3":
                            operativityMask.REFUND_RUNNER_WIN3_CODE = runner.koirunner.koi_code;
                            operativityMask.REFUND_RUNNER_WIN3_TAG = runner.runner_tag;
                            break;
                        case "Win4":
                            operativityMask.REFUND_RUNNER_WIN4_CODE = runner.koirunner.koi_code;
                            operativityMask.REFUND_RUNNER_WIN4_TAG = runner.runner_tag;
                            break;
                    }
                })

            }
            callback(operativityMask);

        },(error) => {
            errorcallback(error)});
    }

    getOperativityOdds(data, matchID, callback, errorCallback){

        post('/koi/operativityodds?match='+matchID, data,response => {

            callback(response);

        }, error => {

            errorCallback(error);

        })

    }

    getOperativityBankrolls(data, callback, errorCallback){

        post('/koi/operativitiesbankroll', data, response => {

            callback(response);

        }, error => {

            errorCallback(error);

        })

    }

}
