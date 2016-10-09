import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from './customer.service';
import {Observable} from 'rxjs/RX';

@Component({
    moduleId: __moduleName,
    selector: 'my-customers',
    templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit{ 
   customers: any[];

   constructor(private _customerService: CustomerService){
    }

   ngOnInit(){

       this._customerService.getCustomers_Observable() //no ayncs in html
          .subscribe(
              (data) => this.customers = data,
              (err) => {
                  console.log(err);
                  return Observable.of([]);
              }
          )

       //customers: any[];
       //this._customerService.getCustomers() //no ayncs in html
       // .then((data) => this.customers = data)
       // .catch((err) => {
       //     console.log(err);
       //     return Observable.of([]);
       // });

      /*
        customers: Promise<any[]>;
        this.customers = this._customerService.getCustomers()
        .catch((err) => {
            console.log(err);
            return Observable.of([]);
        });
       */

      /* 
      customers: Observable<any[]>;
      this.customers = this._customerService.getCustomers_Observable()
       .catch((err) => {
           console.log(err);
           return Observable.of([]);
       });
       */
   }
}
