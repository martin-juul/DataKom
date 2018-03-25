import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataStorageService } from "./storage/data-storage.service";

import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { OcticonsDirective } from './directives/octicons.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

const PIPES = [
  SanitizeHtmlPipe,
  OrderByPipe
];

const DIRECTIVES = [
  OcticonsDirective
];

@NgModule({
  imports: [],
  declarations: [
    ...PIPES,
    ...DIRECTIVES,
  ],
  exports: [
    CommonModule,
    ...PIPES,
    ...DIRECTIVES,
  ],
  providers: [
    DataStorageService
  ]
})
export class SharedModule { }
