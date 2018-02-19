import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Content } from "../../shared/data/model/content.model";
import { EducationsService } from "../educations.service";

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.scss']
})
export class EducationItemComponent {
  education: string;
  content: Content;
  subscription: Subscription;

  constructor (private route: ActivatedRoute,
               private educationsService: EducationsService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.education = params['education'];
      this.educationsService.getContent(this.education);
      this.content = this.educationsService.content;
    });
  }
}
