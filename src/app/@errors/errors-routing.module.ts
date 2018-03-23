import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotfoundComponent } from './notfound/notfound.component';

const errorsRoutes: Routes = [
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(errorsRoutes) ],
  exports: [ RouterModule ]
})
export class ErrorsRoutingModule { }
