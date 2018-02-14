import {Component} from '@angular/core';
import {Task} from './model/task';

@Component ({
moduleId:module.id,
selector: 'my-app',
templateUrl: 'app.component.html'

})
export class AppComponent {

   private tasks = [
       new Task("Buy a drug",false),
       new Task("See a bug",true)
   ]
 }