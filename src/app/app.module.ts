import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { ClientsComponent } from './pages/clients/clients.component';
import { StoresComponent } from './pages/stores/stores.component';
import { RidersComponent } from './pages/riders/riders.component';
import { BusinessComponent } from './pages/business/business.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, ClientsComponent, StoresComponent,
    RidersComponent, BusinessComponent, LoginComponent],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {}
