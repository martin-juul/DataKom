import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataStorageService } from "./storage/data-storage.service";

@NgModule({
  imports: [],
  declarations: [],
  exports: [
    CommonModule
  ],
  providers: [
    DataStorageService
  ]
})
export class SharedModule { }
