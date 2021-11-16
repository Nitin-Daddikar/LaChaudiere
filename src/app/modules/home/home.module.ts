import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule, routes } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { InformationComponent } from './information/information.component';
import { PortalComponent } from './portal/portal.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DpDatePickerModule } from 'ng2-date-picker';

@NgModule({
  declarations: [
    HomeComponent,
    InformationComponent,
    PortalComponent,
    ProductsComponent,
    ConfirmOrderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    NgxDaterangepickerMd.forRoot(),
    Ng2SearchPipeModule,
    DpDatePickerModule
  ]
})
export class HomeModule { }
