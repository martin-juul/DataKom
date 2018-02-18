import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

const BASE_MODULES = [CommonModule];

import {
  TableComponent
} from './table/table.component';
import {
  TableRowComponent
} from './table/table-row/table-row.component';

const COMPONENTS = [
  TableComponent,
  TableRowComponent
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
})
export class LibModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: LibModule,
      providers: []
    };
  }
}
