import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from "ngx-bootstrap";
import { TypeaheadModule } from "ngx-bootstrap";
import { DatePipe } from '@angular/common';

import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { ToasterModule, ToasterService} from 'angular2-toaster';
import { AuthGuard, OktaAuthWrapper, AlertService } from 'app/shared';

import { StaticDataService } from 'app/shared/static/static.service';
import { DataalertService } from 'app/shared/dataalert/dataalert.service';
import { ProductService } from 'app/shared/product/product.service';
import { OAuthModule } from 'angular-oauth2-oidc';

// Import containers
import {
  FullLayout,
  SimpleLayout
} from './containers';

const APP_CONTAINERS = [
  FullLayout,
  SimpleLayout
]

// Import components
import {
  AppAside,
  AppBreadcrumbs,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer
} from './components';

const APP_COMPONENTS = [
  AppAside,
  AppBreadcrumbs,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer
]

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { ProductfilterComponent } from './productfilter/productfilter.component';
import { SummaryService } from 'app/shared/summary/summary.service';
import { SummaryComponent } from './summary/summary.component';
import { SummaryupdateComponent } from './summaryupdate/summaryupdate.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    OAuthModule.forRoot(),
    ChartsModule,
    HttpModule,
    FormsModule,
    ToasterModule,
    MomentModule,
    ModalModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    LoginComponent,
    AlertComponent,
    DashboardComponent,
    ProductComponent,
    ProductfilterComponent,
    SummaryComponent,
    SummaryupdateComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }, 
  AuthGuard, 
  OktaAuthWrapper,
  AlertService,
  DataalertService, 
  StaticDataService,
  ProductService,
  SummaryService,
  DatePipe
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
