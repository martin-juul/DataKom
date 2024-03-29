import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { LibModule } from '../@lib/lib.module';
import { HomeService } from "./home.service";

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    HomeRoutingModule,
    LibModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule {
}
