import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LibModule } from "../@lib/lib.module";
import { SharedModule } from "../shared/shared.module";

import { EducationsComponent } from "./educations.component";
import { EducationsRoutingModule } from "./educations-routing.module";
import { EducationsService } from "./educations.service";
import { EducationItemComponent } from "./education-item/education-item.component";
import { MarkdownModule } from "ngx-markdown";

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    EducationsRoutingModule,
    LibModule,
    MarkdownModule.forChild()
  ],
  declarations: [
    EducationsComponent,
    EducationItemComponent
  ],
  providers: [
    EducationsService
  ]
})
export class EducationsModule {
}
