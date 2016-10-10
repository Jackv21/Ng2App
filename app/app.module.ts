import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import  { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [ 
             BrowserModule, 
             FormsModule, 
             HttpModule 
           ],
  declarations: [ 
                  AppComponent, 
                  LayoutComponent 
                ],  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
