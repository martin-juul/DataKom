import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Error } from './error.model';
import { BackButton } from './back-button.model';
import { Location } from '@angular/common';
import { RouterService } from '../../shared/router.service';

declare var iniBrokeBot: {documentOnReady: Function, documentOnLoad: Function};

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ErrorComponent implements OnInit {
  // Angular can't bind to [error], it's reserved.
  @Input('errorMessage') error?: Error;
  @Input('backButton') backBtn?: BackButton;

  constructor(private routerService: RouterService,
              private location: Location) {

  }

  ngOnInit() {
    this.backBtn.url = this.routerService.getPreviousUrl();

    if (this.backBtn.url === '/') {
      this.backBtn = undefined;
    }
  }

  navigateBack() {

  }
}
