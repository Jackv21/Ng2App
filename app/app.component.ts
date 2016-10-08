import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
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
