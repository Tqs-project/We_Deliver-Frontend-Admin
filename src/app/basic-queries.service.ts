import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';

import { Rider } from './models/Rider';
import { Order } from './models/Order';
import { Customer } from './models/Customer';


const httpOptions = {
  headers : new HttpHeaders(
    {'Content-Type' : 'application/json',
              observe: 'response',
              username : 'Ronaldo',
              idToken : '$2a$10$/qBzaKcmegiEWIo9lyu4/OY.VspfqpEhOJb5TFZfUdOLenp5LIxzS'}
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

  getRiders(): Observable<Rider[]> {
    const url = this.BASE_URL + '/riders';

    // @ts-ignore
    return this.http.get<Rider[]>(url, this.getHeader());
  }

  getOrders(): Observable<Order[]> {
    const url = this.BASE_URL + '/orders';

    // @ts-ignore
    return this.http.get<Order[]>(url, this.getHeader());
  }

  getCustomers(): Observable<Customer[]> {
    const url = this.BASE_URL + '/customers';

    // @ts-ignore
    return this.http.get<Customer[]>(url, this.getHeader());
  }

}
