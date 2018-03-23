import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Content } from '../../shared/data/model/content.model';
import { EducationsService } from '../educations.service';
import { TitleService } from '../../shared/title.service';
import { ErrorService } from '../../shared/error.service';

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
              private router: Router,
              private educationsService: EducationsService,
              private titleService: TitleService) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.education = params['education'];
      this.educationsService.getContent(this.education)
        .then((result) => {
          this.content = (<Content>result.body);
          this.titleService.setTitle(this.content.header_title);
        })
        .catch((err: any) => {
          this.router.navigateByUrl('/error');
        });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
