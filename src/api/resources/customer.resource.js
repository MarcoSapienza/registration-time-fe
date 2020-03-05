import {get, post} from '../api';

export default class Customer {


    constructor(name, fiscalCode, vatNumber, socialName, address, cap, city, email, phone, mobilePhone, note) {
        if(arguments.length) {
            //Check if constructor has got parameters
            this.name = name;
            this.fiscalCode = fiscalCode;
            this.vatNumber = vatNumber;
            this.socialName = socialName;
            this.address = address;
            this.cap = cap;
            this.city = city;
            this.email = email;
            this.phone = phone;
            this.mobilePhone = mobilePhone;
            this.note = note;
        }
    }

    sendNewCustomer(callback, errorCallback){

        let bodyRequest = {
            name:  this.name,
            fiscalCode: this.fiscalCode,
            vatNumber:  this.vatNumber,
            socialName: this.socialName,
            address: this.address,
            cap: this.cap,
            city:  this.city,
            email: this.email,
            phone: this.phone,
            mobilePhone: this.mobilePhone,
            note: this.note
        }

        post('https://registrationtime-be.herokuapp.com/api/customer/new', bodyRequest, response => {

            console.log("response from send new customer: ",response);
            callback(response);

        }, error => {

            errorCallback(error);

        })
    }

    getAllCustomers(callback, errorCallback){
        get('https://registrationtime-be.herokuapp.com/api/customer/list',(response)=>{
            callback(response.data);
        },(error) => {errorCallback(error)});
    }
}
