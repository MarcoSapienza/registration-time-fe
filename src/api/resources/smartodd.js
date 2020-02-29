import {get} from '../api';

export default class SmartOdd {

    constructor(runners_codes, selectedMatch,promo) {
        if(arguments.length) {
            //Check if constructor has got parameters
            this.runners_codes = runners_codes;
            this.selectedMatch = selectedMatch;
            this.promo = promo;
        }


    }
    getSmartOddsFromMatchAndRunners(callback, errorcallback){
        get('/koi/smartodds?match=' + this.selectedMatch + '&runners=[' + this.runners_codes + ']' + '&promo='+this.promo,(response)=>{
            callback(response.data);
        },(error) => {errorcallback(error)});
    }

}
