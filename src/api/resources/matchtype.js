import {get} from '../api';

export default class Matchtype {

    constructor() {
    }

    getAllMatchType( callback, errorcallback){
        get('/koi/matchtypes',(response)=>{
            callback(response.data);
        },(error) => {errorcallback(error)});
    }


}