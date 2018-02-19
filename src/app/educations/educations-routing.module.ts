import { ActivatedRoute, ParamMap, RouterModule, Routes } from "@angular/router";
import { NgModule, OnInit } from "@angular/core";
import 'rxjs/add/operator/switchMap';

import { EducationsComponent } from "./educations.component";
import { EducationItemComponent } from "./education-item/education-item.component";

const eduRoutes: Routes = [
  { path: '', component: EducationsComponent },
  { path: ':education', component: EducationItemComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(eduRoutes)
  ],
  exports: [ RouterModule ]
})
export class EducationsRoutingModule { }
