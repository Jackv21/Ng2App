import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'my-customer',
    templateUrl: 'customer.component.html'
})
export class CustomerComponent implements OnInit{ 
  @Input()  customer: { id: number, name: string };

   ngOnInit(){
       
   }
}
