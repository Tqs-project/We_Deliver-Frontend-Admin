import { Component, OnInit } from '@angular/core';
import {BasicQueriesService} from '../../basic-queries.service';

import {Customer} from '../../models/Customer';
import {HttpEvent} from '@angular/common/http';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  orders: Customer[];

  constructor(
    private adminService: BasicQueriesService
  ) { }

  ngOnInit(): void {
    this.adminService.getCustomers().subscribe(
      response => { console.log(response);
        this.orders = response}
    )
  }

}
