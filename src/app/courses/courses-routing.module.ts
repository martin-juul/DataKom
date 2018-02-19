import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { CoursesComponent } from "./courses.component";
import { CourseItemComponent } from "./course-item/course-item.component";

const coursesRoutes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'faglig-kommunikation', component: CourseItemComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(coursesRoutes) ],
  exports: [ RouterModule ]
})
export class CoursesRoutingModule { }
