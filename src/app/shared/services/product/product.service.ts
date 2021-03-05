import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  commonURL="https://test-shopapp.herokuapp.com/"

  constructor(private _http:HttpClient) { }

  getAllproducts():Observable<any>{
    return this._http.get(`${this.commonURL}allProducts`)
  }

}
