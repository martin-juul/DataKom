import { Component, OnInit } from '@angular/core';

import { Error } from '../../@lib/error/error.model';
import { TitleService } from '../../shared/title.service';
import { BackButton } from '../../@lib/error/back-button.model';

@Component({
  selector: 'app-error-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {
  message: Error = {
    lead: 'Hovsa!',
    message: 'Vi kunne desværre ikke finde den side du ledte efter.'
  };
  backBtn: BackButton = {
    label: 'Tilbage',
    url: undefined
  };

  constructor(private titleService: TitleService) { }

  ngOnInit() {
    this.titleService.setTitle('Siden findes ikke');
  }

}
