import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataStorageService } from "./storage/data-storage.service";

import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';

const PIPES = [
  SanitizeHtmlPipe
];

@NgModule({
  imports: [],
  declarations: [
    ...PIPES,
  ],
  exports: [
    CommonModule,
    ...PIPES,
  ],
  providers: [
    DataStorageService
  ]
})
export class SharedModule { }
