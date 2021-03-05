import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserService } from './shared/services/user/user.service';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor(private _user:UserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    //localStorage.setItem("token",this._user.token)
    let token=localStorage.getItem("token")
    // console.log(this._user.token);

    if(token){
      // const token="Bearer " + this._user.token
      // debugger
        request= request.clone({
          headers:request.headers.set("Authorization", token)
        })
    }

    return next.handle(request);
  }
}
