import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;

  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',

    icon: 'icon-chart-pie-36',
    class: ''
  },
  {
    path: '/stores',
    title: 'Stores',

    icon: 'icon-cart',
    class: ''
  },
  {
    path: '/riders',
    title: 'Riders',

    icon: 'icon-delivery-fast',
    class: '' },
  {
    path: '/clients',
    title: 'Clients',

    icon: 'icon-single-02',
    class: ''
  },
  {
    path: '/user',
    title: 'Money',

    icon: 'icon-coins',
    class: ''
  },
  {
    path: '/tables',
    title: 'Table List',

    icon: 'icon-puzzle-10',
    class: ''
  },
  {
    path: '/typography',
    title: 'Typography',

    icon: 'icon-align-center',
    class: ''
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
