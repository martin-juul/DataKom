import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  burgerToggleState = true;

  constructor() { }

  ngOnInit() {
  }

  toggleBurger(): void {
    this.burgerToggleState = !this.burgerToggleState;
  }

  closeBurger(): void {
    this.burgerToggleState = true;
  }

}
