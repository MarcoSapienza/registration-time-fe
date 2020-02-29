import {get} from '../api';

export default class Competition {

    constructor(competitionId) {
        if(arguments.length) {
            this.competitionId = competitionId; //Check if constructor has got parameters
        }
    }

    getMatchesOfCompetition(callback, errorcallback){
        get('/koi/matches?competitionid='+this.competitionId, (response)=>{
            callback(response.data);
        },(error) => {errorcallback(error)});
    }

    getAllCompetitions(callback, errorcallback){
        get('/koi/competitions?loadAll=true', (response)=>{
            callback(response.data);
        },(error) => {errorcallback(error)});
    }

    getAllBookmakers(callback, errorcallback){
        get('/koi/bookmakers', (response)=>{
            callback(response.data);
        },(error) => {errorcallback(error)});
    }

    getMissingRunnersPerBookmaker(callback, errorcallback){
        get('/koi/bookmakers/missingrunners', (response)=>{
            callback(response.data);
        },(error) => {errorcallback(error)});
    }

    getAllMarkets(callback, errorcallback){
        get('/koi/markets',(response)=>{
            callback(response.data);
        },(error) => {errorcallback(error)});
    }

    getAllMarketCategories(callback, errorcallback){
        get('/koi/marketcategories', (response)=>{
            callback(response.data);
        }, (error) => {errorcallback(error)});
    }

    getBookmakerAccounts(bookmaker, callback, errorcallback){
        get('/koi/users/bookmakeraccounts?bookmaker_name=' + bookmaker, (response) => {
            callback(response.data);
        }, (error) => {errorcallback(error)});
    }
}