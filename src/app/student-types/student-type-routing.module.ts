import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { StudentTypeComponent } from "./student-type.component";

const studentRoutes: Routes = [
  { path: '', component: StudentTypeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(studentRoutes)
  ],
  exports: [ RouterModule ]
})
export class StudentTypeRoutingModule { }
