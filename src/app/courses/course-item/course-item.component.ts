import { Component, OnInit } from "@angular/core";
import { TitleService } from "../../shared/title.service";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  subscription: Subscription;
  courseId: number;

  constructor(private titleService: TitleService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.titleService.setTitle('Faglig kommunikation');

    this.subscription = this.route
      .params.subscribe(param => {
        this.courseId = param['courseId'];

      });
  }

}
