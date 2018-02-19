import { Component, OnInit } from "@angular/core";
import { TitleService } from "../../shared/title.service";

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit() {
    this.titleService.setTitle('Faglig kommunikation');
  }

}
