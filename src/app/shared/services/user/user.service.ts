import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public token =""
  public isAuth=false
  commonURL="http://localhost:3000"
  constructor(private _http:HttpClient) { }

  /***Post user data to API */
  userData(data):Observable<any>{
  return  this._http.post(`${this.commonURL}/register`,data)
  }
  loginUser(data):Observable<any>{
    // let data={email,password}
    return this._http.post(`${this.commonURL}/login`,data)
  }
  // allusers():Observable<any>{
  //   return this._http.get(`${this.commonURL}/allUsers`)
  // }
  logOut():Observable<any>{
    // let data={email,password}
    return this._http.post(`${this.commonURL}/logoutAll`,null)
  }

}
