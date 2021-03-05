import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  commonURL="http://localhost:3000"

  constructor(private _http:HttpClient) { }

  getAllproducts():Observable<any>{
    return this._http.get(`${this.commonURL}/allProducts`)
  }

}
