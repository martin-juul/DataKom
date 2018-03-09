import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Content } from '../../shared/data/model/content.model';
import { EducationsService } from '../educations.service';
import { TitleService } from '../../shared/title.service';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.scss']
})
export class EducationItemComponent implements OnInit, OnDestroy {
  education: string;
  content: Content;
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private educationsService: EducationsService,
              private titleService: TitleService) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.education = params['education'];
      this.educationsService.getContent(this.education)
        .then((result) => {
          this.content = (<Content>result.body);
        });
      // Velkommen til fusker biksen
        setTimeout(() => {
          this.titleService.setTitle(this.content.header_title);
        }, 200);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
