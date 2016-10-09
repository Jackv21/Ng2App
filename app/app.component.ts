import { Component } from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent { 
    // [] means property binding
    // () means event binding
    title = 'My App';
    name = 'Jack';
    color = 'red';
    
    clickMe(){
        this.color = 'green';
    }
}
