import { Injectable } from '@angular/core';
import  { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/RX';

const URL = 'app/customers.json';

@Injectable()
export class CustomerService {
    constructor(private _http: Http){}

    getCustomers(){
       return this._http.get(URL)
       .map((response: Response) => response.json())
       .toPromise()
       .catch((err: any) => {
           // do something
           return Promise.reject(err);
       });
    }

    getCustomers_Observable(){
       return this._http.get(URL)
       .map((response: Response) => response.json())
       .catch(this._handleError);
    }

    _handleError(err: any){
        console.log(err);
        return Observable.throw(err);        
    }
}