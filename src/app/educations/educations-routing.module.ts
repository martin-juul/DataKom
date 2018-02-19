import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { EducationsComponent } from "./educations.component";

const eduRoutes: Routes = [
  { path: '', component: EducationsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(eduRoutes)
  ],
  exports: [ RouterModule ]
})
export class EducationsRoutingModule { }
