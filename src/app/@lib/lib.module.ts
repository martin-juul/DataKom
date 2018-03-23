import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table/table-row/table-row.component';
import { EduPickerTableComponent } from "./widgets/edupicker/table/edu-picker-table.component";
import { EduPickerMenuComponent } from "./widgets/edupicker/menu/edu-picker-menu.component";
import { EduPickerComponent } from "./widgets/edupicker/edu-picker.component";
import { EduPickerService } from "./widgets/edupicker/edu-picker.service";
import { EduPickerCardsComponent } from './widgets/edupicker/cards/edu-picker-cards.component';
import { AccordionModule } from 'ngx-bootstrap';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

const BASE_MODULES = [
  CommonModule,
  RouterModule,
  AccordionModule
];

const COMPONENTS = [
  TableComponent,
  TableRowComponent,
  EduPickerMenuComponent,
  EduPickerTableComponent,
  EduPickerComponent,
  EduPickerCardsComponent,
  JumbotronComponent
];

const PROVIDERS = [
  EduPickerService
];

@NgModule({
  imports: [
    ...BASE_MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ],
  providers: [
    ...PROVIDERS
  ]
})
export class LibModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: LibModule,
      providers: []
    };
  }
}
