import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LibModule } from "../@lib/lib.module";
import { SharedModule } from "../shared/shared.module";

import { StudentTypeRoutingModule } from "./student-type-routing.module";
import { StudentTypeComponent } from "./student-type.component";
import { StudentTypeService } from "./student-type.service";
import { MarkdownModule } from "ngx-markdown";

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    StudentTypeRoutingModule,
    LibModule,
    MarkdownModule.forChild()
  ],
  declarations: [
    StudentTypeComponent
  ],
  providers: [
    StudentTypeService
  ]
})
export class StudentTypeModule {
}
