import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  public CustomerIDD:string='';
  apiUrl='http://localhost:5102/Customer/';
  // http://localhost:5102/Customer/PostCustomer

  constructor(private _http:HttpClient) { }
  
  GetAllCusromers():Observable<any>{
    return this._http.get(this.apiUrl+'GetCustomers');
  }
  AddCustomer(data:any):Observable<any>{
    return this._http.post(this.apiUrl+'PostCustomer',data);
  }
  GetCustomerById(id:any):Observable<any>{
    return this._http.get(this.apiUrl+'GetCustomer/'+id);
  }
  UpdateCustomer(id:number,data:any):Observable<any>{
    return this._http.put(this.apiUrl+'PutCustomer/'+id,data);
  }
}
