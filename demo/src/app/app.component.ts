import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { HTTPStatus } from './http-error.interceptor';
import { delay } from 'rxjs/operators';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  loadinController;
  constructor(private httpStatus: HTTPStatus,private service:AppService){
    sessionStorage.setItem('loggedIn', 'false'); 
    this.httpStatus.getHttpStatus().pipe(delay(0)).subscribe((status) => {
      this.loadinController = status;
    });


    
  }

}
