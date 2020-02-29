import axios from 'axios';

export default axios.create();


export function get(url, callback, errorcallback){
    axios.get(url, { crossdomain: true })
        .then(res => {
            if(callback != null){
                callback(res);
            }
        })
        .catch(err => {
            if(errorcallback != null){
                errorcallback(err);
            }
        })
}


export function post(url, body, callback, errorcallback) {
    axios.post(url, body, { crossdomain: true })
        .then((res) => {
            callback(res);
        })
        .catch(function (err) {
            errorcallback(err);
        });
}
