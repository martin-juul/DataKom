import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ErrorsRoutingModule } from './errors-routing.module';

import { NotfoundComponent } from './notfound/notfound.component';
import { CommonModule } from '@angular/common';
import { LibModule } from '../@lib/lib.module';

const COMPONENTS = [
  NotfoundComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ErrorsRoutingModule,
    LibModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ErrorsModule { }
