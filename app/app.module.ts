import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import  { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [ 
             BrowserModule, 
             FormsModule, 
             HttpModule,
             RouterModule.forRoot([ 
      { path: '', component: HomeComponent }
    ]) 
           ],
  declarations: [ 
                  AppComponent,
                  HomeComponent 
                ],  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
