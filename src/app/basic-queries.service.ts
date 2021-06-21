import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';

import { Rider } from './models/Rider';
import { Order } from './models/Order';
import { Customer } from './models/Customer';


const httpOptions = {
  headers : new HttpHeaders(
    {'Content-Type' : 'application/json',
              username : 'Ronaldo',
              idToken : '$2a$10$vi/eSzkjD1EU6sG51lUe6e6X/sSqlFj4FLMaJiTcenVveWOXIAEm2'}
  )
};

@Injectable({
  providedIn: 'root'
})
export class BasicQueriesService {

  private BASE_URL = 'https://webmarket-314811.oa.r.appspot.com/api/admin';
  constructor(
    private http: HttpClient
  ) { }

  getHeader(): any {
    return httpOptions;
  }

  getRiders(): Observable<HttpEvent<Rider[]>> {
    const url = this.BASE_URL + '/riders';

    return this.http.get<Rider[]>(url, this.getHeader());
  }

  getOrders(): Observable<HttpEvent<Order[]>> {
    const url = this.BASE_URL + '/orders';

    return this.http.get<Order[]>(url, this.getHeader());
  }

  getCustomers(): Observable<HttpEvent<Customer[]>> {
    const url = this.BASE_URL + '/customers';

    return this.http.get<Customer[]>(url, this.getHeader());
  }

}
