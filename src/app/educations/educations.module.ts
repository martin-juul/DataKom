import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LibModule } from "../@lib/lib.module";
import { SharedModule } from "../shared/shared.module";

import { EducationsComponent } from "./educations.component";
import { EducationsRoutingModule } from "./educations-routing.module";
import { EducationsService } from "./educations.service";

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    EducationsRoutingModule,
    LibModule
  ],
  declarations: [
    EducationsComponent
  ],
  providers: [
    EducationsService
  ]
})
export class EducationsModule {
}
