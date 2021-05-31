import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapComponent } from '../../pages/map/map.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UserComponent } from '../../pages/user/user.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import {StoresComponent} from '../../pages/stores/stores.component';
import {RidersComponent} from '../../pages/riders/riders.component';
import {ClientsComponent} from '../../pages/clients/clients.component';
import {BusinessComponent} from '../../pages/business/business.component';

// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },

  { path: 'stores', component: StoresComponent },
  { path: 'riders', component: RidersComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'business', component: BusinessComponent },

  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'user', component: UserComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'typography', component: TypographyComponent },
  // { path: "rtl", component: RtlComponent }
];
