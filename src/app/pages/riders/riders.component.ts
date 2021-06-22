import { Component, OnInit } from '@angular/core';
import {Rider} from '../../models/Rider';
import {BasicQueriesService} from '../../basic-queries.service';
import {HttpEvent} from '@angular/common/http';

@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.scss']
})
export class RidersComponent implements OnInit {

  private riders: Rider[];

  constructor(
    private adminService: BasicQueriesService
  ) { }

  ngOnInit(): void {
    this.adminService.getRiders().subscribe(
      response => {
        console.log(response);
        this.riders = response;
      }
    );
  }

}
