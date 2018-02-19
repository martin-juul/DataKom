import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LibModule } from '../@lib/lib.module';
import { SharedModule } from '../shared/shared.module';
import { TabsModule } from "ngx-bootstrap";

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesService } from './courses.service';

import { CoursesComponent } from './courses.component';
import { CourseItemComponent } from "./course-item/course-item.component";

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    CoursesRoutingModule,
    LibModule,
    TabsModule
  ],
  declarations: [
    CoursesComponent,
    CourseItemComponent
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
