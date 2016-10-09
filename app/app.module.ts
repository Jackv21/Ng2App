import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import  { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CustomerComponent, CustomersComponent, CustomerService }  from './customer/index';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, 
                  CustomerComponent,
                  CustomersComponent ],
  providers: [CustomerService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
